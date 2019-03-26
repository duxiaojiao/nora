import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      return { ...state, list, total };
    },
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const response = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: {response,total:5 }});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
