import React, {Component} from 'react';
import './index.css';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";

class Details extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.trySearch(this.props.match.params.id)
    }

    render() {

        var returner =
            <div className="App">
                <Loading/>
                {this.props.json && (
                    <Movie json={this.props.json}/>
                )}


            </div>;
        return <div>{returner}</div>
    }
}

const mapStateToProps = state => {

    return {
        errors: state.errors,
        json: state.json,

    };
};


const mapDispachToProps = dispatch => {
    return {
        trySearch: (id) => dispatch({type: "FIND_MOVIE", id: id}),
    };
};


export default connect(mapStateToProps, mapDispachToProps)(Details);
