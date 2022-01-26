import { POST_signUp, POST_login } from '../services/userAction';
import { effectError } from '../utils/handleError';
import { setToken } from '../utils/token';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'users',
  state: {},
  effects: {
    *POST_login({ payload, loading, callback }, { call }) {
      try {
        console.log(payload);
        if (loading) loading(true);
        const response = yield call(POST_login, payload);
        yield setToken(response.token);
        message.success(response.message);
        yield router.push('/instruction');
        if (loading) loading(false);
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
    *POST_signUp({ payload, loading, callback }, { call }) {
      try {
        if (loading) loading(true);
        console.log('im', payload);
        const response = yield call(POST_signUp, payload);
        console.log('sign', response.token);
        yield setToken(response.token);
        message.success(response.message);
        yield router.push('/');
        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
  },
  reducers: {},
};
