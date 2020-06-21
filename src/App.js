import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoodsContainer from './containers/MoodsContainer';
import PromptInput from './components/PromptInput';
import {fetchMoods} from './actions/fetchMoods';

class App extends Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return (
      <div className='App'>
        <PromptInput />
        <br/>
        <MoodsContainer moods={this.props.moods} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps, {fetchMoods})(App)
// export default App