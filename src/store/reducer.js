import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from './actions';

/* `payload` stands for the action's payload */

export default combineReducers({
  clicks: handleActions(
    {
      [actions.decrement]: (state, payload) => state + 1,
      [actions.increment]: (state, payload) => state + 1,
    },
    0
  ),
  count: handleActions(
    {
      [actions.decrement]: (state, payload) => state - 1,
      [actions.increment]: (state, payload) => state + 1,
    },
    0
  ),
});
