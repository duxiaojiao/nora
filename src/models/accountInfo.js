import { queryUserDetail } from '../services/accountInfo';



export default {
  namespace: 'accountInfo',
  state: {
    accountInfo:{},
  },
  subscriptions: {},
  effects: {
    * accountInfo({ payload }, { call,put }) {
      const response = yield call(queryUserDetail, payload);
      yield put({ type: 'saveAccount', payload: { accountInfo: response.data } });
      return response;
    },
  },
  reducers: {
    saveAccount(state, { payload: { accountInfo} }) {
      return {
        ...state,
        accountInfo,
      }
    },
  },
};


