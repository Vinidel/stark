import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import reducers from "./reducers";
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

// export default createStore(reducers, applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__());

const rootReducer = combineReducers({
  predictions: reducers,
  form: formReducer
})

const middleware = [logger,thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));