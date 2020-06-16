import React, { Component } from 'react';
import { connect } from 'react-redux'

import MoodsContainer from './containers/MoodsContainer';

class App extends Component {

  render() {
    return (
      <div>
        <MoodsContainer />
      </div>
    );
  }
}

export default connect()(App)