import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import Moods from '../components/Moods';
import {fetchMoods} from '../actions/fetchMoods';

class MoodsContainer extends Component {

    componentDidMount() {
        this.props.fetchMoods();
    }

    render() {
        return (
            <div>
                <Route path='/moods' render={() => <Moods moods={this.props.moods} />} />
                {/* <Moods moods={this.props.moods} /> */}
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