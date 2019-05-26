import request from '../utils/request';

export async function logout(data) {
  return request.post(`/system/account/logout`, data);
}
