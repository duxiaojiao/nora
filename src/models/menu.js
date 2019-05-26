import {queryMenuTree,queryUserMenuTree} from '../services/menu';

export default {
  namespace: 'menu',
  state: {
    menusList: [],
  },
  reducers: {
    saveList(state, { payload: { menusList} }) {
      return {
        ...state,
        menusList,
      }
    },
  },
  effects: {
    // *queryMenu({ _ }, { call, put }) {
    //   const response = yield call(menusService.queryMenu);
    //   console.log(response);
    //   yield put({ type: 'saveList', payload: { menusList: response.data.records } });
    // },
    *queryMenuTree({ _ }, { call, put }) {
      const response = yield call(queryMenuTree);
      yield put({ type: 'saveList', payload: { menusList: response.data } });
    },

    *queryUserMenuTree({ _ }, { call, put }) {
      const response = yield call(queryUserMenuTree);
      yield put({ type: 'saveList', payload: { menusList: response.data } });
    },


  }
};
