import {createStore,combineReducers,applyMiddleware} from 'redux'
import myReducer from '../reducers/myReducer';
import logger from 'redux-logger'

const reducers=combineReducers({myReducer});
const middlewares=applyMiddleware(logger)

export const store=createStore(reducers,middlewares)

