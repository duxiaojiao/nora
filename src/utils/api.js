export default {


  // 本地开发 mock 的时候配置
  target: '',

  // 本地开发，调用本地后端的时候配置
  // target: 'http://localhost:28081',


  platformMenuList: '/platform/menu/list',

  platformUserList:'/platform/user/list',
  platformUserDelete:'/platform/user/delete',
  platformUserAdd:'/platform/user/add',
  platformUserEdit:'/platform/user/edit',


  platformRoleQuery:'/platform/role/query',
  platformRoleDelete:'/platform/role/delete',
  platformRoleAdd:'/platform/role/add',
  platformRoleEdit:'/platform/role/edit',

  platformMenuQuery:'/platform/menu/query',
  platformMenuDelete:'/platform/menu/delete',
  platformMenuAdd:'/platform/menu/add',
  platformMenuEdit:'/platform/menu/edit',


  platformLogin: '/platform/login',
  platformLogout: '/platform/logout',

  // 获取全部权限
  allAuthority: '/platform/authority/allAuthority',

};
