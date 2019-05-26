import request from '../../../utils/request';


export function queryList() {
  return request.get(`/system/sysUser/queryUser`);
}

export function deleteUser(data) {
  return request.post(`/system/sysUser/deleteUser`,data);
}

export function addUser(data) {
  return request.post(`/system/sysUser/addUser`,data);
}

export function editUser(data) {
  return request.post(`/system/sysUser/editUser`,data);
}

export function queryUserById(data) {
  return request.get(`/system/sysUser/queryUserById`,data);
}

export function resetPwd(data) {
  return request.post(`/system/sysUser/resetPwd`,data);
}
