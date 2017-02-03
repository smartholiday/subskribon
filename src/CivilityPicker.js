import React, { Component } from 'react';

export default (props) => {
  const civilities = ["", "Mlle", "Mme", "Mr"]

  const options = civilities
  .map(key => (<option key={key} value={key}>{key}</option>))

  return (
    <select value={props.value} onChange={(event) => props.onCivilityChanged(event.target.value)}>
      {options}
    </select>
  )
}