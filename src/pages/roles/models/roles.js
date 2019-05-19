import * as rolesService from '../services/roles';

export default {
  namespace: 'roles',
  state: {
    rolesList: [],
    total: null,
  },
  reducers: {
    saveList(state, { payload: { rolesList } }) {
      return {
        ...state,
        rolesList,
      }
    }
  },
  effects: {
    *queryRole({ _ }, { call, put }) {
      const response = yield call(rolesService.queryRole);
      console.log(response);
      yield put({ type: 'saveList', payload: { rolesList: response.data.records } });
    },
    *deleteRole({ payload }, { call, put }) {
      const response = yield call(rolesService.deleteRole, payload);
      yield put({ type: 'queryRole' });
      console.log(response);
      return response;
    },
    *addRole({ payload }, { call, put }) {
      const response = yield call(rolesService.addRole, payload);
      yield put({ type: 'queryRole' });
      console.log(response);
      return response;
    },
    *editRole({ payload}, { call, put}) {
      const response = yield call(rolesService.editRole, payload);
      yield put({ type: 'queryRole' });
      console.log(response);
      return response;
    },
  }
};
