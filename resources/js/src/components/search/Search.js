import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.css';
import FormErrors from "../error/FormErrors";
import {Button, Form} from "react-bootstrap";

// import {Form} from 'react-form';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                query: '',
            },
            errors: {},
            isLoading: false,
            json: null
        };

        this.handleChange = this.handleChange.bind(this);
    }


    onSubmit = (e) => {
        this.props.trySearch(this.state.form);
        e.preventDefault()
    };

    componentDidUpdate(prevProps) {

        if (this.props.json !== prevProps.json) {
            // this.props.navigation.navigate('/')
        }
    }

    handleChange(e, data) {
        let field = e.currentTarget.name;
        let form = {
            form: {
                ...this.state.form,
                [field]: e.currentTarget.value
            }
        };
        this.setState(form);
    }

    render() {

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicquery">
                    <Form.Control type="query" placeholder="Enter query" required
                                  name="query"
                                  field="query"
                                  label="Username / query"
                                  value={this.state.form.query}
                        // error={errors.query}
                                  onChange={this.handleChange}/>

                </Form.Group>

 
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <FormErrors/>

            </Form>

        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        errors: state.errors,
        response: state.response,
        json: state.json,

    };
};


const mapDispachToProps = dispatch => {
    return {
        trySearch: (form) => dispatch({type: "SEARCH_MOVIE", form: form}),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Search);
