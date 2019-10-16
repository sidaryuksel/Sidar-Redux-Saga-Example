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
        <div key={x.id}>
            <h1>{x.firstName+' '+x.lastName +' ' +x.age}</h1>
        </div>
    )


    render() {
        const results = this.props.data;
        console.log("result:",results);
        return results.length? 
                <h3>
                    {results.map(this.person)}
                </h3>
                :
                <h1>Loading...</h1>;
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
