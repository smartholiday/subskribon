import React from 'react';

export default props => {
  const addresses = [
    "21 Avenue Dubonnet, 92400 Courbevoie, France",
    "C/ Comte de Urgell 240 - 8º B, Barcelona 08036, España"
  ];

  const options = addresses
  .map(key => (<option key={key} value={key}>{key}</option>))

  return (
    <select value={props.value} onChange={(event) => props.onAddressChanged(event.target.value)}>
      {options}
    </select>
  )
}
