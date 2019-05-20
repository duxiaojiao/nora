import * as rolesService from '../services/roles';

export default {
  namespace: 'roles',
  state: {
    rolesList: [],
    menuTree:[],
    total: null,
    menuTreeVisible:false,
  },
  reducers: {
    saveList(state, { payload: { rolesList } }) {
      return {
        ...state,
        rolesList,
      }
    },
    saveMenuTree(state, { payload: { menuTree } }) {
      return {
        ...state,
        menuTree,
      }
    },
    showModal(state, { payload: { menuTreeVisible } }) {
      return {
        ...state,
        menuTreeVisible,
      }
    },
  },
  effects: {
    *queryRole({ _ }, { call, put }) {
      const response = yield call(rolesService.queryRole);
      console.log(response);
      yield put({ type: 'saveList', payload: { rolesList: response.data.records } });
    },
    *queryRoleSelectMenuTree({ _ }, { call, put }) {
      const response = yield call(rolesService.queryRoleSelectMenuTree);
      console.log(response);
      yield put({ type: 'saveMenuTree', payload: { menuTree: response.data} });
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
    *showMenuTree({ payload}, { call, put}) {
      // const response = yield call(rolesService.editRole, payload);
      // return response;
      yield put({ type: 'showModal', payload: { menuTreeVisible:true }});

    },
  }
};
