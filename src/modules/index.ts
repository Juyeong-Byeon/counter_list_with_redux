import { combineReducers } from 'redux';
import counterListReducer from './counterList';


const rootReducer = combineReducers({ counterListReducer });
export type GlobalStates = | ReturnType<typeof rootReducer>
export default rootReducer;