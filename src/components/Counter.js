import React, { Component } from 'react';

class Counter extends Component {

    state = ({
        number: 0
    })

    counter = () => {
        // console.log('clicked')
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.counter()}>{this.state.number}</button>
            </div>
        );
    }
}

export default Counter;
