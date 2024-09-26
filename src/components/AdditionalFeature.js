import React from 'react';
import { bindActionCreators } from 'redux';
import { addFeatures } from '../actions/featureActions'
import { connect } from 'react-redux'

const AdditionalFeature = props => {
 console.log({props})
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button className="button" onClick={ () => props.addFeatures(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return{
    ...state,
    // feature: state.car.features
  }
}

export default connect (mapStateToProps, {addFeatures})( AdditionalFeature);
