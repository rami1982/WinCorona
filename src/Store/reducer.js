import * as actionTyps from './actions';

const initialState = {
    page: 'login',
    pageTitle: 'Login',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTyps.CURRENT_PAGE:
            return {
                ...state,
                page: action.page,
                pageTitle: action.pageTitle,
            }
        default:
            return state;
    };
};

export default reducer;