import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import About from './components/About';
import Moods from './components/Moods';
import Mood from './components/Mood';
import NotesContainer from './containers/NotesContainer';
import { fetchMoods } from './actions/fetchMoods';

class App extends Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return (
      <>
        <Navbar fixed='top' bg='light' variant='light'>
          <Navbar.Brand>
            <h2>MOO<span className='fliph'>D</span>etail</h2>
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link href='/' >About</Nav.Link>
            <Nav.Link href='/moods' >All Moods</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        
        <Switch>
          <Route path='/moods/:feeling/prompts/:id/notes' render={(routerProps) => <NotesContainer {...routerProps} notes={this.props.notes}/>} />
          <Route path='/moods/:feeling' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} />
          <Route path='/moods' render={(routerProps) => <Moods {...routerProps} moods={this.props.moods}/>} />
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