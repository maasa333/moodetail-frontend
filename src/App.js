import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoodsContainer from './containers/MoodsContainer';
// import PromptInput from './components/PromptInput';

class App extends Component {

  render() {
    return (
      <div>
        {/* <PromptInput />
        <br/> */}
        <MoodsContainer />
      </div>
    );
  }
}

export default connect()(App)