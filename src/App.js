import React, { Component } from 'react';
// import { connect } from 'react-redux'
import MoodsContainer from './containers/MoodsContainer';
// import PromptInput from './components/PromptInput';

class App extends Component {

  render() {
    return (
      <>
        {/* <PromptInput />
        <br/> */}
        <MoodsContainer />
      </>
    );
  }
}

// export default connect()(App)
export default App