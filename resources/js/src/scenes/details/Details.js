import React, {Component} from 'react';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";
import MovieDetails from "../../components/movieDetails/MovieDetails";


class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {

        this.props.trySearch(this.props.match.params.id)
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/'}/>)
        }


        let returner =
            <div className="App">
                <Loading/>
                {this.props.json && (
                    <MovieDetails json={this.props.json}/>
                )}

                <Button variant="contained" color="primary" style={{alignContent: "center", marginTop: 16}}
                        onClick={() => {
                            this.setState({redirect: true})
                        }}>Back</Button>

            </div>;
        return <div>{returner}</div>;
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
