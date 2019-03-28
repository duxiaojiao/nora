import request from '../../../utils/request';

export function queryList() {
  return request.post(request.api.platformUserList);
}

export function deleteUser(data) {
  return request.post(request.api.platformUserDelete,data);
}

export function addUser(data) {
  return request.post(request.api.platformUserAdd,data);
}
