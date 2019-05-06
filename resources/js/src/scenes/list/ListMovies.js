import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";
import Search from "../../components/search/Search";

class ListMovies extends Component {

    constructor(props) {
        super(props);
        localStorage.clear();
    }

    render() {

        var returner =
            <div className="App">

                <Loading/>
                <Search/>
            </div>;
        return <div>{returner}</div>
    }
}

const mapStateToProps = (state, p) => {

    return {
        response: state.response
    };
};


export default connect(mapStateToProps, null)(ListMovies);
