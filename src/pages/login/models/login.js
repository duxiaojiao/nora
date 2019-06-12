import { login } from '../services/login';
import { message } from 'antd';
import router from 'umi/router';
import { isSuccess, platformToken } from '../../../common/globalConstant';

export default {
  namespace: 'login',
  state: {},
  subscriptions: {},
  effects: {
    * login({ payload }, { call }) {
      if (localStorage.getItem('token')) {
        router.push('/');
        return;
      }
      const response = yield call(login, payload);
      if (response && response['code'] === 0) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        router.push('/');
      } else if (response && response['code'] === 1) {
        message.error(response.msg);
      }
    },
  },
  reducers: {},
};
