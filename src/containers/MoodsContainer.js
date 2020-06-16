import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moods from '../components/Moods';
import {fetchMoods} from '../actions/fetchMoods';

class MoodsContainer extends Component {

    componentDidMount() {
        this.props.fetchMoods();
    }

    render() {
        return (
            <div>
                <Moods moods={this.props.moods} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods
    }
}

export default connect(mapStateToProps, { fetchMoods })(MoodsContainer);