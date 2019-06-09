import * as menusService from '../services/menus';

export default {
  namespace: 'menus',
  state: {
    menusList: [],
    menuSelectTree:[],
    permission:[],
    total: null,
  },
  reducers: {
    saveList(state, { payload: { menusList} }) {
      return {
        ...state,
        menusList,
      }
    },
    saveTree(state, { payload: { menuSelectTree } }) {
      return {
        ...state,
        menuSelectTree,
      }
    },
    savePermission(state, { payload: { permission } }) {
      return {
        ...state,
        permission,
      }
    }
  },
  effects: {
    *queryMenu({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenu);
      yield put({ type: 'saveList', payload: { menusList: response.data.records } });
    },
    *queryMenuTree({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenuTree);
      yield put({ type: 'saveList', payload: { menusList: response.data } });
    },
    *queryMenuSelectTree({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenuSelectTree);
      yield put({ type: 'saveTree', payload: { menuSelectTree: response.data } });
    },
    *queryMenuPermission({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenuPermission);
      yield put({ type: 'savePermission', payload: { permission: response.data } });
    },
    *deleteMenu({ payload }, { call, put }) {
      const response = yield call(menusService.deleteMenu, payload);
      yield put({ type: 'queryMenuTree' });
      return response;
    },
    *addMenu({ payload }, { call, put }) {
      const response = yield call(menusService.addMenu, payload);
      yield put({ type: 'queryMenuTree' });
      return response;
    },
    *editMenu({ payload}, { call, put}) {
      const response = yield call(menusService.editMenu, payload);
      yield put({ type: 'queryMenuTree' });
      return response;
    },
  }
};
