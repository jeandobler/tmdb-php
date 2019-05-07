import React, {Component} from 'react';
import './index.css';

import {connect} from "react-redux";
import Loading from "../../components/loading/Loading";
import Search from "../../components/search/Search";
import Movie from "../../components/movie/Movie";
import Grid from "@material-ui/core/Grid";

class ListMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            json: null,
            error: false
        }
    }

    render() {

        var returner =

            <div className="App" style={{padding: 16}}>
                <Loading/>
                <Search/>
                <Grid container spacing={16}>
                    {
                        this.props.json && this.props.json.map(item => {
                            return <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}> <Movie json={item}/>
                            </Grid>;
                        })
                    }
                </Grid>
            </div>;

        return <div>{returner}</div>
    }
}

const mapStateToProps = state => {

    return {
        json: state.json,
        loading: state.loading,

    };
};


export default connect(mapStateToProps, null)(ListMovies);
