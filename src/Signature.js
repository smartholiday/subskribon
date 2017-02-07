import React from 'react';
import logo from './logo.png';

export default props => {
    const name = (
        <span>
            {[props.civility, props.full_name].filter(s => s !=="").join(' ')}
        </span>
    )
    
    const occupation = props.occupation
        ? (
            <span>
                {props.occupation}
            </span>
        )
        : null

    const Phone = (phoneProps) => phoneProps.number
        ? (
            <span>
                {phoneProps.number}
            </span>
        )
        : null

    return (
        <div>
            <div>
                {name}
                {occupation}
                <Phone number={props.phone} />
                <Phone number={props.mobile} />
                {props.address}
            </div>

            <img src={logo} alt='logo'/>
        </div>
    )
}
