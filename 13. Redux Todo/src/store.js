import { createStore, combineReducers } from "redux";
import todos from './reducer/todo';

const rootReducers = combineReducers({
  todos,
});

const store = createStore(rootReducers);

export default store;
