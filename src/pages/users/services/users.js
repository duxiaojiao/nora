import request from '../../../utils/request';

// export function queryList() {
//   return request.post(request.api.platformUserList);
// }

export function queryList() {
  return request.get(`/system/sysUser/queryUser`);
}

// export function deleteUser(data) {
//   return request.post(request.api.platformUserDelete,data);
// }

export function deleteUser(data) {
  return request.post(`/system/sysUser/deleteUser`,data);
}

// export function addUser(data) {
//   return request.post(request.api.platformUserAdd,data);
// }

export function addUser(data) {
  return request.post(`/system/sysUser/addUser`,data);
}

export function editUser(data) {
  return request.post(request.api.platformUserEdit,data);
}
