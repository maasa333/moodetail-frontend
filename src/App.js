import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/moods')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        App 
      </div>
    );
  }
}

export default App;