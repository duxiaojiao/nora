import * as menusService from '../services/menus';

export default {
  namespace: 'menus',
  state: {
    menusList: [],
    menuSelectTree:[],
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
    }
  },
  effects: {
    *queryMenu({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenu);
      console.log(response);
      yield put({ type: 'saveList', payload: { menusList: response.data.records } });
    },
    *queryMenuTree({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenuTree);
      console.log(response);
      yield put({ type: 'saveList', payload: { menusList: response.data } });
    },
    *queryMenuSelectTree({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenuSelectTree);
      console.log(response);
      yield put({ type: 'saveTree', payload: { menuSelectTree: response.data } });
    },
    *deleteMenu({ payload }, { call, put }) {
      const response = yield call(menusService.deleteMenu, payload);
      yield put({ type: 'queryMenuTree' });
      console.log(response);
      return response;
    },
    *addMenu({ payload }, { call, put }) {
      const response = yield call(menusService.addMenu, payload);
      yield put({ type: 'queryMenuTree' });
      console.log(response);
      return response;
    },
    *editMenu({ payload}, { call, put}) {
      const response = yield call(menusService.editMenu, payload);
      yield put({ type: 'queryMenuTree' });
      console.log(response);
      return response;
    },
  }
};
