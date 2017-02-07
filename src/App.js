import React, { Component } from 'react';
import './App.css';
import Signature from './Signature';
import copy from 'copy-to-clipboard';
import ReactDOMServer from 'react-dom/server';
import TextField from './TextField';
import Field from './Field';
import SelectField from './SelectField';

const addresses = [
  "21 Avenue Dubonnet, 92400 Courbevoie, France",
  "C/ Comte de Urgell 240 - 8º B, Barcelona 08036, España"
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            full_name: 'Sir Weekendesk',
            position: 'Couch Killer',
            phone: '+33 2 44 81 80 03',
            mobile: '+34 934 453 767',
            address: addresses[0]
        };
        
        this.onFieldChange = name => event => {
            this.setState({
                [name]: event.target.value
            });
        };

        this.copyToClipboardHandler = signature => () => {
            copy(ReactDOMServer.renderToString(signature));
        };
    }
    
    render() {
        const signature = <Signature {...this.state}/>
        
        return (
            <div className="App">
                <div className="form">
                    <Field label='Full name'>
                        <TextField onChange={this.onFieldChange('full_name')} value={this.state.full_name} />
                    </Field>
                    <Field label='Position'>
                        <TextField onChange={this.onFieldChange('position')} value={this.state.position} />
                    </Field>
                    <Field label='Phone'>
                        <TextField onChange={this.onFieldChange('phone')} value={this.state.phone} />
                    </Field>
                    <Field label='Mobile'>
                        <TextField onChange={this.onFieldChange('mobile')} value={this.state.mobile} />
                    </Field>
                    <Field label='Address'>
                        <SelectField options={addresses} value={this.state.address} onChange={this.onFieldChange('address')} />
                    </Field> 
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