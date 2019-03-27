import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request.get(`/api/users?_page=${page}&_limit=5`,5);
}
