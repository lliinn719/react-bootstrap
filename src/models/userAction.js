import { GET_user, POST_signUp, POST_login } from '../services/userAction';
import { effectError } from '../utils/handleError';
import { setToken, getToken } from '../utils/token';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'users',
  state: {},
  effects: {
    *GET_user({ loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const token = yield getToken();
        const { user } = yield call(GET_user, token);
        yield put({
          type: 'SAVE_users',
          payload: user,
        });
        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
    *POST_login({ payload, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const response = yield call(POST_login, payload);
        yield setToken(response.token);
        yield put({
          type: 'SAVE_response',
          payload: response.message,
        });
        message.success(response.message);
        yield router.push('/');
        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
    *POST_signUp({ payload, loading, callback }, { call }) {
      try {
        if (loading) loading(true);
        yield call(POST_signUp, payload);
        yield router.push('/login');
        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
  },
  reducers: {
    SAVE_users(state, { payload }) {
      return {
        ...state,
        users: payload,
      };
    },
    SAVE_response(state, { payload }) {
      return {
        ...state,
        response: payload,
      };
    },
  },
};
