import React from 'react';

const Phones = props => {
    const phones = [
        (props.phone && { number: props.phone, label: 'Tel.:' }),
        (props.mobile && { number: props.mobile, label: 'Mob.:' }),
        (props.fax && { number: props.fax, label: 'Fax:' })
    ];
    return (
        <p>
            {phones.map((phone) =>
                phone && (
                <div>
                    <span key={phone.label} style={{ paddingRight: '4px' }}>{phone.label}</span>
                    <a style={{ color: '#473b47' }} href={`tel:${phone.number}`}>{phone.number}</a>
                </div>
            ))}
        </p>
    );
};

const Address = ({ address }) => (
    <a
      style={{ color: '#473b47' }}
      href={address.includes('France')
        ? 'https://www.google.com/maps/place/Weekendesk/@48.8865295,2.3064978,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fbb4602542d:0x842f4a2edb4b339b!8m2!3d48.8865295!4d2.3086865'
        : 'https://www.google.com/maps/place/Weekendesk/@41.3902023,2.1483218,15z/data=!4m2!3m1!1s0x0:0x73ef8bd9421eab80?sa=X&ved=2ahUKEwjHrpq1nM7kAhUQlhQKHTKmBfsQ_BIwE3oECA8QCA'
    }>
        {address.split(',').map((line) => <div>{line}</div>)}
    </a>
);

export default props =>
    <div
        style={{
            fontFamily: 'Open Sans,sans-serif',
            lineHeight: '24px',
            fontSize: '16px',
            color: 'rgb(5, 0, 35)',
        }}
    >
        <p style={{ margin: '8px 0px' }}>
            –
            <br/>
            <strong>{props.name}</strong>
            <br/>
            <strong>{props.position}</strong>
            {props.positionDescription && <span> {props.positionDescription}</span>}
        </p>
        <Phones {...props} />
        <a href={props.website} style={{ border: '0' }}>
            <img
                src='https://res.cloudinary.com/weekendesk/image/upload/f_auto,q_auto,h_64/v1567782504/assets/weekendesk-brand.png'
                alt='logo'
                width='145px'
                height='38px'
            />
        </a>
        <Address {...props} />
    </div>
