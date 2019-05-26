import request from '../../../utils/request';

export async function login(data) {
  return request.post(`/system/account/login`, data);
}
