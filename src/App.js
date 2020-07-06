import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import About from './components/About';
import MoodsContainer from './containers/MoodsContainer';
import Mood from './components/Mood';
import {fetchMoods} from './actions/fetchMoods';

class App extends Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return (
      <>
        <Navbar bg='light' variant='light'>
          <Nav.Link href='/' >About</Nav.Link>
          <Nav.Link href='/moods' >All Moods</Nav.Link>
        </Navbar>
        
        <Switch>
          <Route path='/moods/:feeling' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} />
          <Route path='/moods' render={(routerProps) => <MoodsContainer {...routerProps} moods={this.props.moods}/>} />
          <Route path='/' component={About} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps, {fetchMoods})(App)