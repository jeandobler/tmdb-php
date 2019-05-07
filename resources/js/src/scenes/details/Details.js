import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";

class Details extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var returner =
            <div className="App">
               <Movie json={this.props}/>
            </div>;
        return <div>{returner}</div>
    }
}

const mapStateToProps = (state, p) => {

    return {
        response: state.response,
    };
};


export default connect(mapStateToProps, null)(Details);
