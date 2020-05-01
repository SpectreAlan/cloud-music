import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { loadStore } from '../utils/storeRecovery'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancers = process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, loadStore(), enhancers)

export default store;
