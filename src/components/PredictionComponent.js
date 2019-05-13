import React, { Component } from 'react';
import PredictionForm from './PredictionForm';
import { connect } from "react-redux";
import ACTIONS from '../state-management/actions';

class PredictionComponent extends Component {

  componentDidMount() {
    this.props.dispatchFetchPredictions();
  }

  handleSubmit = () => {
    this.props.dispatchCreatePrediction(this.props.formValues)
  }

  render() {
    return (
      <div className="Prediction">
        <h2>Add a prediction</h2>
        <PredictionForm predictions={this.props.predictions} handleSubmit={this.handleSubmit}/>  
      </div>
    );
  }
}

const mapStateToProps = state => {
  const form = state.form.prediction;
  return {
    predictions: state.predictions,
    formValues : form ? form.values : {}

  }
};

const mapDispatchToProps = {
  dispatchCreatePrediction: ACTIONS.createPrediction,
  dispatchFetchPredictions: ACTIONS.getAllPredictions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictionComponent);
