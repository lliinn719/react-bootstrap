import { GET_food, POST_food } from '../services/foodAction';
import { effectError } from '../utils/handleError';
import { getToken } from '../utils/token';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'foods',
  state: {},
  effects: {
    *GET_food({ loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const token = yield getToken();
        const { foods } = yield call(GET_food, token);
        yield put({
          type: 'SAVE_foods',
          payload: foods,
        });
        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        if (loading) loading(false);
        yield effectError(error, arguments[1]);
      }
    },
  },
  reducers: {
    SAVE_foods(state, { payload }) {
      return {
        ...state,
        foods: payload,
      };
    },
  },
};
