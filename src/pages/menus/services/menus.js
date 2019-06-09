import request from '../../../utils/request';

export function queryMenu() {
  return request.get(`/system/sysMenu/queryMenu`);
}

export function queryMenuTree() {
  return request.get(`/system/sysMenu/queryMenuTree`);
}

export function queryMenuSelectTree() {
  return request.get(`/system/sysMenu/queryMenuSelectTree`);
}

export function deleteMenu(data) {
  return request.post(`/system/sysMenu/deleteMenu`,data);
}

export function addMenu(data) {
  return request.post(`/system/sysMenu/addMenu`,data);
}

export function editMenu(data) {
  return request.post(`/system/sysMenu/editMenu`,data);
}

export function queryMenuPermission() {
  return request.get(`/system/sysMenu/queryMenuPermission`);
}
