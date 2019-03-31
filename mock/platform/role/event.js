import loginErrorInfo from "../util/loginErrorInfo";

let data = [{
  key: 1,
  role:'admin',
  roleName: '管理员',
  date: '2019-03-27',
}, {
  key: 2,
  role:'user',
  roleName: '用户',
  date: '2019-03-27',
}
];

export default {
  'post /platform/role/query': function (req, res) {
    const { platform_token } = req.headers;

    if (platform_token && platform_token !== 'null') {
      res.send(JSON.stringify(data));
    } else {
      const loginErrorInfoValue = loginErrorInfo();
      res.send(JSON.stringify(loginErrorInfoValue));
    }
  },

  'post /platform/role/delete': function (req, res) {
    console.log(req.body.key);
    data = data.filter(v => v.key !== parseInt(req.body.key));
    console.log(data);
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },

  'post /platform/role/add': function (req, res) {
    console.log(req.body);
    data = [...data, {
      ...req.body,
      key: data[data.length - 1].key + 1,
    }];

    res.json({
      success: true,
    });
  },

  'post /platform/role/edit': function (req, res) {
    const { key, values} = req.body;
    data=data.map(item =>(item.key===key?{key,...values}:item));
    console.log(data);
    res.json({
      success: true,
    });
  },
}
