import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import actions from './store/actions';
import './index.css';

const App = ({ clicks, count, decrement, increment }) => (
  <main>
    <p>You have changed the count {clicks} times</p>
    <p>{count || 0}</p>
    <div className="App-buttons">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </main>
);

const mapStateToProps = state => ({
  clicks: state.clicks,
  count: state.count,
});

const mapDispatchToProps = {
  decrement: actions.decrement,
  increment: actions.increment,
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
