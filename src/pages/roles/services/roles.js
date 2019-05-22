import request from '../../../utils/request';

export function queryRole() {
  return request.get(`/system/sysRole/queryRole`);
}

export function queryRoleSelectMenuTree() {
  return request.get(`/system/sysRole/queryRoleSelectMenuTree`);
}

export function deleteRole(data) {
  return request.post(`/system/sysRole/deleteRole`,data);
}

export function addRole(data) {
  return request.post(`/system/sysRole/addRole`,data);
}

export function editRole(data) {
  return request.post(`/system/sysRole/editRole`,data);
}

export function assignMenuTree(data) {
  return request.post(`/system/sysRole/saveRoleMenu`,data);
}

export function queryRoleMenu(data) {
  return request.get(`/system/sysRole/queryRoleMenu`,data);
}
