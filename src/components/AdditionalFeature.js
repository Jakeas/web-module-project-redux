import React from 'react';
import { bindActionCreators } from 'redux';

const AdditionalFeature = props => {
  function handleClickAdd (){
     return
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button className="button" onClick={handleClickAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
