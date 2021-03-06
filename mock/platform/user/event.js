import loginErrorInfo from "../util/loginErrorInfo";

let data = [
  {
    key: 1,
    account: 'admin',
    name: '管理员',
    phone: '15821392942',
    email: '376525082@qq.com',
  },
  {
    key: 2,
    account: 'guest',
    name: '游客',
    phone: '15878921234',
    email: 'wangyi@163.com',
  }
];

export default {
  'post /platform/user/list': function (req, res) {
    const { platform_token } = req.headers;

    if (platform_token && platform_token !== 'null') {
      res.send(JSON.stringify(data));
    } else {
      const loginErrorInfoValue = loginErrorInfo();
      res.send(JSON.stringify(loginErrorInfoValue));
    }
  },

  'post /platform/user/delete': function (req, res) {
    data = data.filter(v => v.key !== parseInt(req.body.key));
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },

  'post /platform/user/add': function (req, res) {
    data = [...data, {
      ...req.body,
      key: data[data.length - 1].key + 1,
    }];

    res.json({
      success: true,
    });
  },

  'post /platform/user/edit': function (req, res) {
    const { key, values} = req.body;
    data=data.map(item =>(item.key===key?{key,...values}:item));
    res.json({
      success: true,
    });
  },
}
