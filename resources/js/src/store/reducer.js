const initialState = {};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SEARCH_MOVIE':
            return {...state, loading: true};



        default:
            return  state;

    }
    // return newState;
};

export default reducer;