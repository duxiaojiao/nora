import router from 'umi/router';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// 自定义 render，比如在 render 前做权限校验
export function render(oldRender) {
  // fetch('/api/permissionCheck')
  //   .then(() => {
  //     oldRender();
  //   })
  //   .catch((e) => {
  //     require('umi/router').redirect('/login');
  //   });
  oldRender();
  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/login');
  }
}
