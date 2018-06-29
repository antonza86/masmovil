import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import { Provider } from 'react-redux';
import { Store } from './store';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));