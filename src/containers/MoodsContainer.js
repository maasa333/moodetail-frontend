import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Route} from 'react-router-dom';
import Moods from '../components/Moods';
// import {fetchMoods} from '../actions/fetchMoods';

class MoodsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchMoods();
    // }

    render() {
        return (
            <>
                <Moods moods={this.props.moods} />
                {/* <Route exact path='/moods' render={(routerProps) => <Moods {...routerProps} moods={this.props.moods} />} /> */}
                {/* <Route exact path='/moods/:id' render={(routerProps) => <Mood {...routerProps} moods={this.props.moods} />} /> */}
                {/* <Moods moods={this.props.moods} /> */}
            </>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         moods: state.moods
//     }
// }

export default MoodsContainer;
// export default connect(mapStateToProps, { fetchMoods })(MoodsContainer);