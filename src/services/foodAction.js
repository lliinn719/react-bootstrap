import request from '../utils/request';

export function GET_food(token) {
  return request.get('/food', null, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}
export function POST_food(payload, token) {
  return request.post('/food', payload, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}

export function POST_signUp(payload) {
  return request.post('/user/register', payload);
}
