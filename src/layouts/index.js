import React from 'react';
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import BaseLayout from './BasicLayout'

function BasicLayout(props) {
  if (props.location.pathname === '/login' || props.location.pathname === '/register') {
    return props.children;
  }
  return (
    <LocaleProvider locale={zh_CN}>
      <BaseLayout
        props={props}
      />
    </LocaleProvider>
  );
}

export default BasicLayout;
