import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import moodReducer from './reducers/moodReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// import AlertTemplate from 'react-alert-template-mui';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(moodReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        {/* <AlertProvider template={AlertTemplate} {...options}> */}
          <App />
        {/* </AlertProvider> */}
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);