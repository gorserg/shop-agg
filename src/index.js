import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
