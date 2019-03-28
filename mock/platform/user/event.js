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
    console.log(req.body.key);
    data = data.filter(v => v.key !== parseInt(req.body.key));
    console.log(data);
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },

  'post /platform/user/add': function (req, res) {
    console.log(req.body);
    data = [...data, {
      ...req.body,
      key: data[data.length - 1].key + 1,
    }];

    res.json({
      success: true,
    });
  },
}
