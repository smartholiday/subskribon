import React from 'react';
import logo from './logo.png';
import './Signature.css';

const lineStyle = {
    margin: '4px 0',
    color: '#473b47',
    fontSize: 'small'
}

const nameStyle = {
    ...lineStyle,
    fontWeight: 'bold',
    fontSize: 'medium',
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
    const hasBothNumbers = props.phone && props.mobile;
    return (
        <p style={lineStyle}>
            { hasBothNumbers
                ? <span style={phoneLabelStyle}>Tel :</span>
                : undefined
            }
            { props.phone
                ? <PhoneNumber number={props.phone} />
                : undefined
            }
            { hasBothNumbers
                ? <span style={phoneSeparatorStyle}>|</span>
                : undefined
            }
            { hasBothNumbers
                ? <span style={phoneLabelStyle}>Mob :</span>
                : undefined
            }
            { props.mobile
                ? <PhoneNumber number={props.mobile} />
                : undefined
            }
        </p>
    )
}

const Email = ({ email }) =>
    <p style={lineStyle}>
        <a style={linkStyle} href={`mailto:${email}`}>{email}</a>
    </p>
    
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
        { props.email
            ? <Email {...props} />
            : undefined
        }
        <Logo />
        <Address {...props} />
    </div>
