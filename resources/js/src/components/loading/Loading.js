import React from 'react';
import {connect} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

let Loading = ({loading}) => (
    loading ?
        <div style={{textAlign: 'center', margin:16}}>
            <h5><FontAwesomeIcon icon={faSpinner} spin /> Loading</h5>
        </div> :
        null
);
const mapStateToProps = (state) => ({loading: state.loading});
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;