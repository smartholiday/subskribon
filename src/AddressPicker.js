import React from 'react';

export default props => {
  const addresses = [
    "",
    "21 Avenue Dubonnet, 92400 Courbevoie, France",
    "Barcelone, Spain"
  ];

  const options = addresses
  .map(key => (<option key={key} value={key}>{key}</option>))

  return (
    <select value={props.value} onChange={(event) => props.onAddressChanged(event.target.value)}>
      {options}
    </select>
  )
}
