import request from '../../../utils/request';

export async function login(params) {
  return request.post(request.api.platformLogin, params);
}
