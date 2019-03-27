import { delay } from 'roadhog-api-doc';

const Api = {
  'POST /platform/login': (req, res) => {

    const { username, password } = req.body;

    const randomValue = parseInt(Math.random() * 100, 10);

    if (username === 'admin' && password === '123456' && randomValue > 5) {
      res.send(JSON.stringify({
        'error_info': null,
        'result': {
          'token': 'cd534924c12561de4eb948531a7fdeb9',
        },
        'is_success': true,
      }));

    } else {
      res.send(JSON.stringify({
        'error_info': {
          'code': 401,
          'msg': '用户名或密码不正确',
          'date': 1536739520111,
        },
        'result': null,
        'is_success': false,
      }));
    }


  },
};

export default delay(Api, 5);
