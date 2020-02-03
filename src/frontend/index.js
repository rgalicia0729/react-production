import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './routes/App';
import './assets/styles/Main.scss';

if (typeof window !== 'undefined') {
  const history = createBrowserHistory();

  hydrate(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('app'),
  );
}
