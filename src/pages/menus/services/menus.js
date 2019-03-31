import request from '../../../utils/request';

export function queryMenu() {
  return request.post(request.api.platformMenuQuery);
}

export function deleteMenu(data) {
  return request.post(request.api.platformMenuDelete,data);
}

export function addMenu(data) {
  return request.post(request.api.platformMenuAdd,data);
}

export function editMenu(data) {
  return request.post(request.api.platformMenuEdit,data);
}
