import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, NavLink, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import Home from './components/Home';
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
          <Nav.Link href='/' >Home</Nav.Link>
          <Nav.Link href='/moods' >All Moods</Nav.Link>
        </Navbar>
        {/* <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/moods'>All Moods</NavLink>
        <br/><br/> */}
        
        <Switch>
          <Route path='/moods/:id' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} />
          <Route path='/moods' render={(routerProps) => <MoodsContainer {...routerProps} moods={this.props.moods}/>} />
          <Route path='/' component={Home} />
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