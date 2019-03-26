import { delay } from 'roadhog-api-doc';

const Api = {
  'POST /platform/logout': (req, res) => {
    const randomValue = parseInt(Math.random() * 100, 10);

    if (randomValue > 5) {
      res.send(JSON.stringify({
        'result': {
          'msg': '操作成功',
          'date': 1536768054052,
          'code': 200,
        },
        'error_info': null,
        'is_success': true,
      }));

    } else {
      res.send(JSON.stringify({
        'error_info': {
          'code': 500,
          'msg': '服务器内部异常,退出失败',
          'date': 1536739520111,
        },
        'result': null,
        'is_success': false,
      }));
    }


  },
};

export default delay(Api, 5);
