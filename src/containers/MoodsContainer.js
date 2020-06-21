import React, { Component } from 'react';
import Moods from '../components/Moods';

class MoodsContainer extends Component {

    render() {
        return (
            <div>
                <Moods moods={this.props.moods} />
            </div>
        );
    }
}

export default MoodsContainer;