import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer, { count: 0, clicks: 0 });
