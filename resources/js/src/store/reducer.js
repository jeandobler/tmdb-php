const initialState = {};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SEARCH_MOVIE':
            return {...state, loading: true};

        case "MOVIES_FOUND":
            return {...state, loading: action.loading, json: action.json, error: action.error,};

        default:
            return state;

    }
    // return newState;
};

export default reducer;