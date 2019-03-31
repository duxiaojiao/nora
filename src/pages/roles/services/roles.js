import request from '../../../utils/request';

export function queryRole() {
  return request.post(request.api.platformRoleQuery);
}

export function deleteRole(data) {
  return request.post(request.api.platformRoleDelete,data);
}

export function addRole(data) {
  return request.post(request.api.platformRoleAdd,data);
}

export function editRole(data) {
  return request.post(request.api.platformRoleEdit,data);
}
