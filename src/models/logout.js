import request from '../utils/request';
import router from 'umi/router';
import { message } from 'antd';
import { isSuccess, platformToken } from '../common/globalConstant';

async function logout(params) {
  return request.post(request.api.platformLogout, params);
}


export default {
  namespace: 'logoutToNamespace',
  state: {},
  subscriptions: {},
  effects: {
    * platformLogout({ payload }, { call }) {
      const response = yield call(logout, payload);
      if (response && response[isSuccess] === true) {
        localStorage.removeItem(platformToken);
        router.push('/login');
      } else {
        message.error(response.error_info.msg);
      }
    },
  },
  reducers: {},
};
