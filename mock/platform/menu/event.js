import loginErrorInfo from "../util/loginErrorInfo";

let data = [{
  key: 1,
  menuName:'首页',
  menuCode: 'index',
  route: '/',
}, {
  key: 2,
  menuName:'权限管理',
  menuCode: 'security',
}, {
  key: 3,
  menuName:'用户管理',
  menuCode: 'user',
  route: '/users',
}, {
  key: 4,
  menuName:'角色管理',
  menuCode: 'role',
  route: '/roles',
}, {
  key: 5,
  menuName:'菜单管理',
  menuCode: 'menu',
  route: '/menus',
}
];

export default {
  'post /platform/menu/query': function (req, res) {
    const { platform_token } = req.headers;

    if (platform_token && platform_token !== 'null') {
      res.send(JSON.stringify(data));
    } else {
      const loginErrorInfoValue = loginErrorInfo();
      res.send(JSON.stringify(loginErrorInfoValue));
    }
  },

  'post /platform/menu/delete': function (req, res) {
    data = data.filter(v => v.key !== parseInt(req.body.key));
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },

  'post /platform/menu/add': function (req, res) {
    data = [...data, {
      ...req.body,
      key: data[data.length - 1].key + 1,
    }];

    res.json({
      success: true,
    });
  },

  'post /platform/menu/edit': function (req, res) {
    const { key, values} = req.body;
    data=data.map(item =>(item.key===key?{key,...values}:item));
    res.json({
      success: true,
    });
  },
}
