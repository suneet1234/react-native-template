import createReducer from '../CreateReducers';
import { ActionType } from '../../Type';
const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN, USER_LOGIN_LOADING } = ActionType

let initialState = {
    loading: false,
    error: '',
    user: {},
};

export const userReducer = createReducer(initialState, {
    [USER_LOGIN_LOADING](state, action) {
        return Object.assign({}, state, {
            loading: action.payload,
        });
    },
    [USER_LOGIN_FAILURE](state, action) {
        return Object.assign({}, state, {
            error: action.payload,
            loading: false
        });
    },
    [USER_LOGIN](state, action) {
        return Object.assign({}, state, {
            user: action.payload,
            loading: false,
            error: ''
        });
    }
});
