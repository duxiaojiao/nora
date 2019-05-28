import request from '../utils/request';



export async function queryUserDetail(payload) {
  return request.get(`/system/account/queryUserDetail`);
}
