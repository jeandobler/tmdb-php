import {all, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import env from "../config/env";


function* fetchMovies(data) {
    let errors = null
    let json = yield axios.get(env.ROOT_API + `movies`,{params: data.form} )
        .then(response => response.data.data)
        .catch(
            response => {
                errors = response.response.data.errors
                return {api_token: null}
            }
        );


    yield put({type: "MOVIES_FOUND", json: json, errors: errors, loading: false});
}


function* fetchMovie(id) {
    let errors = null
    let json = yield axios.get(env.ROOT_API + `movies/` + id)
        .then(response => response.data.data)
        .catch(
            response => {


                errors = response.response.data.errors
                return {api_token: null}
            }
        );
    yield put({type: "MOVIES_FOUND", json: json, errors: errors, loading: false});
}


function* actionWatcher() {
    yield takeLatest('SEARCH_MOVIES', fetchMovies)
    yield takeLatest('FIND_MOVIE', fetchMovie)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}