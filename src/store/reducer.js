import { INCREMENT, DECREMENT } from './types';

export default function counter(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
