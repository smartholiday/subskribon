import React, { Component } from 'react';
import './App.css';
import Signature from './Signature';
import TextField from './TextField';
import Field from './Field';
import SelectField from './SelectField';

const addresses = [
  "19-21 Avenue Dubonnet, 92400 Courbevoie, France",
  "C/ Comte de Urgell 240 - 8º B, Barcelona 08036, España"
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Sir Weekendesk',
            position: 'Couch Killer',
            positionDescription: '',
            phone: '+34 934 453 767 ext. 261',
            mobile: '+33 6 44 81 80 03',
            fax: '',
            address: addresses[0],
            copied: false
        };
        
        this.onFieldChange = fieldName => this.getFieldChangeHandler(fieldName).bind(this);

        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    getFieldChangeHandler(fieldName) {
        return event => {
            this.setState({
                copied: false,
                [fieldName]: event.target.value
            });
        };
    }
    
    onButtonClick() {
        if (document.body.createTextRange) {
    		const range = document.body.createTextRange();
    		range.moveToElementText(this.signature);
    		range.select();
    	}else if (window.getSelection) {
    		const selection = window.getSelection();        
    		const range = document.createRange();
    		range.selectNodeContents(this.signature);
    		selection.removeAllRanges();
    		selection.addRange(range);
     	}
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        this.setState({
            copied: true
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-form">
                    <div className="App-form-line">
                        <Field label='Name'>
                            <TextField onChange={this.onFieldChange('name')} value={this.state.name} />
                        </Field>
                    </div>
                    <div className="form-line">
                        <Field label='Position'>
                            <TextField onChange={this.onFieldChange('position')} value={this.state.position} />
                        </Field>
                        <Field label='Position description (optional)'>
                            <TextField onChange={this.onFieldChange('positionDescription')} value={this.state.positionDescription} />
                        </Field>
                    </div>
                    <div className="form-line">
                        <Field label='Phone'>
                            <TextField onChange={this.onFieldChange('phone')} value={this.state.phone} />
                        </Field>
                        <Field label='Mobile'>
                            <TextField onChange={this.onFieldChange('mobile')} value={this.state.mobile} />
                        </Field>
                        <Field label='Fax'>
                            <TextField onChange={this.onFieldChange('fax')} value={this.state.fax} />
                        </Field>
                    </div>
                    <div className="form-line">
                        <Field label='Address'>
                            <SelectField options={addresses} value={this.state.address} onChange={this.onFieldChange('address')} />
                        </Field>
                    </div>
                </div>
                <div className="App-signature-label">Result</div>
                <div className="App-signature">
                    <div className="App-signature-result" ref={node => { this.signature = node; }}>
                        <Signature {...this.state}/>
                    </div>
                </div>
                <button className="App-copy" onClick={this.onButtonClick}>
                    {'Copy signature'}
                </button>
                <div className={`App-copy-explanation ${this.state.copied ? '' : 'App-copy-explanation--hidden'}`}>
                    {'Now you can go paste it in your email client'}
                </div>
            </div>
        );
    }
}

export default App;
