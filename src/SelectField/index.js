import React from 'react';
import './SelectField.css';

export default props =>
    <select className='SelectField' value={props.value} onChange={props.onChange}>
        {props.options.map(key =>
            <option key={key} value={key}>{key}</option>
        )}
    </select>
