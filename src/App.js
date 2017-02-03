import React, { Component } from 'react';
import './App.css'
import Signature from './Signature'
import CivilityPicker from './CivilityPicker'
import AddressPicker from './AddressPicker'
import copy from 'copy-to-clipboard'
import ReactDOMServer from'react-dom/server'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      full_name: '',
      occupation: '',
      phone: '',
      mobile: '',
      address: ''
    }
    this.onCivilityChanged = ((civility) => { this.setState({ civility }) }).bind(this)
    this.onNameChanged = ((event) => { this.setState({ full_name: event.target.value }) }).bind(this)
    this.onOccupationChanged = ((event) => { this.setState({ occupation: event.target.value }) }).bind(this)
    this.onPhoneChanged = ((event) => { this.setState({ phone: event.target.value }) }).bind(this)
    this.onMobileChanged = ((event) => { this.setState({ mobile: event.target.value }) }).bind(this)
    this.onAddressChanged = ((address) => { this.setState({ address }) }).bind(this)
    this.copyToClipboardHandler = (signature) => () => copy(ReactDOMServer.renderToString(signature))
  }

  render() {
    const signature = <Signature {...this.state}/>

    return (
      <div className="App">
        <div className="form">
          Civility: <CivilityPicker value={this.state.civility} onCivilityChanged={this.onCivilityChanged} />
          <br/>
          Full name: <input type='text' onChange={this.onNameChanged} value={this.state.full_name}/>
          <br/>
          Occupation: <input type='text' onChange={this.onOccupationChanged} value={this.state.occupation}/>
          <br/>
          Phone: <input type='text' onChange={this.onPhoneChanged} value={this.state.phone}/>
          <br/>
          Mobile: <input type='text' onChange={this.onMobileChanged} value={this.state.mobile}/>
          <br/>
          Address: <AddressPicker onAddressChanged={this.onAddressChanged} value={this.state.address} />
        </div>
        
        <div className="banner">
          {signature}
        </div>
        <button onClick={this.copyToClipboardHandler(signature)} >Copy to clipboard</button>
      </div>
    );
  }
}

export default App;
