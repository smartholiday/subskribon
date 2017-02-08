import React from 'react';
import logo from './logo.png';

const lineStyle = {
    margin: '4px 0',
    color: '#473b47',
    fontSize: 'small',
    fontFamily: 'tahoma,sans-serif'
}

const nameStyle = {
    ...lineStyle,
    fontWeight: 'bold',
    marginTop: '16px'
};

const Name = props => 
    <p style={nameStyle}>{props.name}</p>

const positionDescriptionStyle = {
    fontWeight: 'normal',
    fontStyle: 'italic',
    paddingLeft: '8px'
};

const PositionDescription = props =>
    <span style={positionDescriptionStyle}>{props.positionDescription}</span>

const positionStyle = {
    ...lineStyle,
    fontWeight: 'bold',
    marginBottom: '12px'
};

const Position = props =>
    <p style={positionStyle}>
        {props.position}
        {props.positionDescription
            ? <PositionDescription {...props} />
            : undefined
        }
    </p>

const linkStyle = {
    color: '#b60095'
};

const PhoneNumber = ({ number, label }) =>
    <a style={linkStyle} href={`tel:${number}`}>{number}</a>

const phoneLabelStyle = {
    paddingRight: '4px'
}

const phoneSeparatorStyle = {
    padding: '0 4px'
}

const Phones = props => {
    const phones = [
        { number: props.phone, label: 'Tel :' },
        { number: props.mobile, label: 'Mob :' },
        { number: props.fax, label: 'Fax :' }
    ];
    return (
        <p style={lineStyle}>
            { phones.reduce((toDisplay, phone) => {
                const isFirst = toDisplay.length > 0;
                if (phone.number) {
                    return toDisplay.concat(
                        isFirst ? <span style={phoneSeparatorStyle}>|</span> : undefined,
                        <span key={phone.label} style={phoneLabelStyle}>{phone.label}</span>,
                        <PhoneNumber key={phone.number} number={phone.number} />
                    );
                }
                
                return toDisplay;
            }, [])}
        </p>
    )
}
    
const logoStyle = {
    width: '145px'
}
    
const Logo = () =>
    <p style={lineStyle}>
        <img style={logoStyle} src={logo} alt='logo' width='145px'/>
    </p>
    
const Address = ({ address }) =>
    <p style={lineStyle}>
        {address}
    </p>

export default props =>
    <div>
        <Name {...props} />
        <Position {...props} />
        { props.phone || props.mobile
            ? <Phones {...props} />
            : undefined
        }
        <Logo />
        <Address {...props} />
    </div>
