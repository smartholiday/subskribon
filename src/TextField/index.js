import React from 'react';
import './TextField.css';

export default props =>
	<input className="TextField" type='text' onChange={props.onChange} value={props.value}/>
