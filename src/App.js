import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, NavLink} from 'react-router-dom';
import MoodsContainer from './containers/MoodsContainer';
import Mood from './components/Mood';
import PromptInput from './components/PromptInput';
import {fetchMoods} from './actions/fetchMoods';

class App extends Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return (
      <div className='App'>
        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/new'>New</NavLink>
        <br/>
        <NavLink to='/moods'>All Moods</NavLink>
        <br/>

        <Route exact path='/new' render={(routerProps) => <PromptInput {...routerProps} moods={this.props.moods} />} />
        {/* <PromptInput moods={this.props.moods} /> */}
        <br/>
        <Route exact path='/moods' render={(routerProps) => <MoodsContainer {...routerProps} moods={this.props.moods}/>} />
        {/* <MoodsContainer moods={this.props.moods} /> */}
        <Route exact path='/moods/:id' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} />
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