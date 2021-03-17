import React from 'react';
import { connect } from 'react-redux'
import {removeFeatures } from '../actions/featureActions'

const AddedFeature = props => {
  console.log({props})
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeatures(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) =>{
  return {
    ...state,
  }
}

export default connect (mapStateToProps, {removeFeatures})(AddedFeature);
