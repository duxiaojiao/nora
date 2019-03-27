import request from '../utils/request';

export const getMenu = (callback) => {
  request.post(request.api.platformMenuList).then(res => {
    callback(res.result);
  });
};

