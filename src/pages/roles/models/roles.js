import * as rolesService from '../services/roles';

export default {
  namespace: 'roles',
  state: {
    rolesList: [],
    menuTree:[],
    checkedKeys:[],
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
    saveSelectMenu(state, { payload: { checkedKeys } }) {
      return {
        ...state,
        checkedKeys,
      }
    },
  },
  effects: {
    *queryRole({ _ }, { call, put }) {
      const response = yield call(rolesService.queryRole);
      yield put({ type: 'saveList', payload: { rolesList: response.data.records } });
    },
    *queryRoleSelectMenuTree({ _ }, { call, put }) {
      const response = yield call(rolesService.queryRoleSelectMenuTree);
      yield put({ type: 'saveMenuTree', payload: { menuTree: response.data} });
    },
    *deleteRole({ payload }, { call, put }) {
      const response = yield call(rolesService.deleteRole, payload);
      yield put({ type: 'queryRole' });
      return response;
    },
    *addRole({ payload }, { call, put }) {
      const response = yield call(rolesService.addRole, payload);
      yield put({ type: 'queryRole' });
      return response;
    },
    *editRole({ payload}, { call, put}) {
      const response = yield call(rolesService.editRole, payload);
      yield put({ type: 'queryRole' });
      return response;
    },
    *assignMenuTree({ payload}, { call}) {
      const response = yield call(rolesService.assignMenuTree, payload);
      return response;
    },
    *queryRoleMenu({ payload}, { call,put}) {
      const response = yield call(rolesService.queryRoleMenu, payload);
      yield put({ type: 'saveSelectMenu', payload: { checkedKeys: response.data } });
      return response;
    },
  }
};
