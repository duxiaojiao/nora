import request from '../utils/request';

/**
 * 根据用户获取菜单
 * @param payload
 * @returns {Promise<Object>}
 */
export async function queryUserMenuTree(payload) {
  return request(`/system/sysMenu/queryMenuTree`);
}

/**
 * 全部菜单树
 * @returns {Promise<Obj ect>}
 */
export async function queryMenuTree() {
  return request.get(`/system/sysMenu/queryMenuTree`);
}
