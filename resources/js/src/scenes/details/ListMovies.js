import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";

class Details extends Component {

    constructor(props) {
        super(props);
        localStorage.clear();
    }

    render() {

        var returner =
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Loading/>
                    {/*<LoginForm/>*/}
                </div>
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
