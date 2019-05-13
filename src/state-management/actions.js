import {fetchPredictions} from '../services/getPredictions';

const Types = {
  CREATE_PREDICTION: "CREATE_PREDICTION",
  FETCHED_PREDICTIONS: "FETCHED_PREDICTIONS",
};

const createPrediction = prediction => {
  return (dispatch) => {
    dispatch({
      type: Types.CREATE_PREDICTION,
      payload: prediction
   });
  }
};

const getAllPredictions = () => {
  return (dispatch) => {
    return fetchPredictions()
      .then((data) => dispatch({
        type: Types.FETCHED_PREDICTIONS,
        payload: data.data
      }))
      
  }
}

export default {
  createPrediction,
  getAllPredictions,
  Types
};