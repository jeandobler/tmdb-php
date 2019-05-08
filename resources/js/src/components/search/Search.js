import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.css';
import FormErrors from "../error/FormErrors";
import {Form} from "react-bootstrap";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";

class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            form: {
                query: '',
                page: 1
            },
            loading: this.props.loading,
            errors: {},
            json: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit = (e) => {
        this.props.trySearch(this.state.form);
        e.preventDefault()
    };

    componentDidMount() {
        this.props.trySearch(this.state.form)
    }


    handleChange(e, data) {
        let field = e.currentTarget.name;
        let form = {
            form: {
                ...this.state.form,
                [field]: e.currentTarget.value,
            }
        };
        this.setState(form);
    }

    render() {

        return (
            <Form onSubmit={this.onSubmit}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper style={{
                        padding: '2 4',
                        marginBottom: 16,
                        display: 'flex',
                        alignItems: 'center',

                    }} elevation={1}>

                        <InputBase type="query" placeholder="Enter query"
                                   name="query"
                                   field="query"
                                   label="Username / query"
                                   value={this.state.form.query}
                                   style={{width: "98%", padding: 4}}
                            // error={errors.query}
                                   onChange={this.handleChange}/>

                        <Divider style={{
                            width: 1,
                            height: 28,
                            margin: 4,
                        }}/>
                        <IconButton color="primary" type="submit" style={{padding: 10,}} aria-label="Directions">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Grid>

                <FormErrors/>
            </Form>

        );
    }
}

const mapStateToProps = state => {

    return {
        errors: state.errors
    };
};


const mapDispachToProps = dispatch => {
    return {
        trySearch: (form) => dispatch({type: "SEARCH_MOVIES", form: form}),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Search);
