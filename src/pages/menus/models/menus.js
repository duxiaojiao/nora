import * as menusService from '../services/menus';

export default {
  namespace: 'menus',
  state: {
    menusList: [],
    total: null,
  },
  reducers: {
    saveList(state, { payload: { menusList } }) {
      return {
        ...state,
        menusList,
      }
    }
  },
  effects: {
    *queryMenu({ _ }, { call, put }) {
      const response = yield call(menusService.queryMenu);
      console.log(response);
      yield put({ type: 'saveList', payload: { menusList: response } });
    },
    *deleteMenu({ payload }, { call, put }) {
      const response = yield call(menusService.deleteMenu, payload);
      yield put({ type: 'queryMenu' });
      console.log(response);
      return response;
    },
    *addMenu({ payload }, { call, put }) {
      const response = yield call(menusService.addMenu, payload);
      yield put({ type: 'queryMenu' });
      console.log(response);
      return response;
    },
    *editMenu({ payload}, { call, put}) {
      const response = yield call(menusService.editMenu, payload);
      yield put({ type: 'queryMenu' });
      console.log(response);
      return response;
    },
  }
};
