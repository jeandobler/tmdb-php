import React from 'react';
import {connect} from 'react-redux'
import errorMessages from "../../config/errorMessages";
import {Alert} from "react-bootstrap";

let FormErrors = ({errors}) => {

        if (errors && errors.length > 0) {
            return  <Alert variant='danger' style={{margin:10}}>
                {errorMessages(errors[0].code ? errors[0].code : "unespected").message}
            </Alert>

        } else {
            return null
        }

    }
;
const mapStateToProps = (state) => ({errors: state.errors})
FormErrors = connect(mapStateToProps, null)(FormErrors)
export default FormErrors;