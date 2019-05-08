import React, {Component} from 'react';
import './index.css';
import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";
import Search from "../../components/search/Search";
import Movie from "../../components/movie/Movie";
import Grid from "@material-ui/core/Grid";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";

class ListMovies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            json: [],
            page: 1,
            error: false,
            redirect: null,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.json != prevProps.json) {
            if (this.props.page == 1) {
                this.setState({json: this.props.json})
            } else {
                this.setState({json: this.state.json.concat(this.props.json)})
            }

        }


    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/details/' + this.state.redirect.id} props={this.state.redirect}/>)
        }

        var returner =

            <div className="App" style={{padding: 16}}>

                <Search/>
                <Grid container spacing={16}>
                    {
                        this.state.json && this.state.json.map(item => {
                            return <Grid item xs={12} sm={6} md={4} lg={3}
                                         onClick={() => {
                                             this.setState({redirect: item})
                                         }} key={item.id}> <Movie json={item}/>
                            </Grid>;
                        })
                    }
                </Grid>
                <Loading/>
                {!this.props.loading && (
                    <Button onClick={() => {
                        this.props.trySearch(++this.state.page)
                    }} variant="contained" color="primary" style={{alignContent: "center", marginTop: 16}}>
                        Load more</Button>
                )}

            </div>;

        return <div>{returner}</div>
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        json: state.json,
        loading: state.loading,
        page: state.page,
    };

};

const mapDispachToProps = dispatch => {
    return {
        trySearch: (page) => dispatch({type: "SEARCH_MOVIES", form: {page: page}}),
    };
};


export default connect(mapStateToProps, mapDispachToProps)(ListMovies);
