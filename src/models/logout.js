import router from 'umi/router';
import { message } from 'antd';
import { logout } from '../services/logout';


export default {
  namespace: 'logout',
  state: {},
  subscriptions: {},
  effects: {
    * logout({ payload }, { call }) {
      const response = yield call(logout, payload);
      if (response && response['code'] === 0) {
        localStorage.removeItem('token');
        router.push('/login');
      } else {
        message.error(response.error_info.msg);
      }
    },
  },
  reducers: {},
};
