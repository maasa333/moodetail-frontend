import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route} from 'react-router-dom';
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
        <Route exact path='/new' render={() => <PromptInput moods={this.props.moods} />} />
        {/* <PromptInput moods={this.props.moods} /> */}
        <br/>
        <Route exact path='/moods' render={() => <MoodsContainer moods={this.props.moods}/>} />
        {/* <MoodsContainer moods={this.props.moods} /> */}
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