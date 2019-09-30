// app 的reducer
import createReducer from '../utils/createReducer';

const defaultState = () => ({
  isLogin: false,
  user: {}
});

const loginSuccess = (state, action) => ({
  ...state,
  user: action.user,
});

export default createReducer(defaultState, {
  APP_LOGIN_SUCCESS: loginSuccess
});
