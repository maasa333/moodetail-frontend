import React, { Component } from 'react';
import Moods from '../components/Moods';

class MoodsContainer extends Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                <Moods moods={this.props.moods} />
            </div>
        );
    }
}

export default MoodsContainer;