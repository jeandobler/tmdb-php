import React, {Component} from 'react';
import './index.css';

import { withStyles } from '@material-ui/core/styles';
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

    static getDerivedStateFromProps(props, state) {

        if (props.json && props.json.length > 0) {
            state.json = props.json;
        }
        return state;
    }


    render() {


        var returner =


            <div className="App">

                <Loading/>
                <Search/>
                <Grid container spacing={24}>
                    {
                        this.state.json && this.state.json.map(item => {
                            return <Grid item sm> <Movie json={item}/> </Grid>;
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

    };
};

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});


export default withStyles(styles)
connect(mapStateToProps, null)(ListMovies);
