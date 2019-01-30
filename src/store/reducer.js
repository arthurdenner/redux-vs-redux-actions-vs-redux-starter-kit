import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';
import { increment, decrement } from './actions';

export default combineReducers({
  clicks: createReducer(0, {
    [decrement]: (state, action) => state + 1,
    [increment]: (state, action) => state + 1,
  }),
  count: createReducer(0, {
    [decrement]: (state, action) => state - 1,
    [increment]: (state, action) => state + 1,
  }),
});
