import ACTIONS from "./actions";

const defaultState = {
  list: []
};

const predictionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_PREDICTION: {
      let newItem = { id: state.list.length + 1, ...action.payload };
      state.list.push(newItem);
      return {
        ...state
      };
    }
    case ACTIONS.Types.FETCHED_PREDICTIONS: {
      return {
        ...state,
        list: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default predictionReducer;