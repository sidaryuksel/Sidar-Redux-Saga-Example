import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from './reducers/actions';

class Home extends Component {
    componentDidMount() {
        this.props.requestApiData();
        console.log("action: ", this.props.requestApiData());
    }

    person = (x, i) => (
        <div key={x.id.value}>
            <h1>{x.name.gender}</h1>
            <h1>{x.name.first}</h1>
            <h1>{x.name.last}</h1>
            <img src={x.picture.large} alt="avatar" />
        </div>
    )


    render() {
        const { results = [] } = this.props.data;
        console.log("result:", results);
        console.log("data:", this.props.data);
        return results.length ? <h3>{results.map(this.person)}</h3> : <h4>loading...</h4>;
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
