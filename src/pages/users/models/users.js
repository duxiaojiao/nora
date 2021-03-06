import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    usersList: [],
    userDetail:'',
    rolesList:[],
  },
  reducers: {
    saveList(state, { payload: { usersList } }) {
      return {
        ...state,
        usersList,
      }
    },
    saveUserDetail(state, { payload: { userDetail } }) {
      return {
        ...state,
        userDetail,
      }
    }
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const response = yield call(usersService.queryList);
      yield put({ type: 'saveList', payload: { usersList: response.data.records } });
    },
    *queryUserById({ payload }, { call, put }) {
      const response = yield call(usersService.queryUserById,payload);
      yield put({ type: 'saveUserDetail', payload: { userDetail: response.data } });
    },
    *deleteUser({ payload }, { call, put }) {
      const response = yield call(usersService.deleteUser, payload);
      yield put({ type: 'queryList' });;
      return response;
    },
    *addUser({ payload }, { call, put }) {
      const response = yield call(usersService.addUser, payload);
      yield put({ type: 'queryList' });
      return response;
    },
    *editUser({ payload}, { call, put}) {
      const response = yield call(usersService.editUser, payload);
      yield put({ type: 'queryList' });
      return response;
    },
    *resetPwd({ payload}, { call}) {
      return  yield call(usersService.resetPwd, payload);
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname, query }) => {
  //       if (pathname === '/users') {
  //         dispatch({ type: 'fetch', payload: query });
  //       }
  //     });
  //   },
  // },
};
