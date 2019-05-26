import React, { Component } from 'react';
import { Layout, Icon, Dropdown, Avatar, Menu, Spin } from 'antd';
import { connect } from 'dva';
import SideBar from './side';
import styles from './index.css';


const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;
const UserMenu = (props) => {
  const handleMenuClick = ({ key }) => {
    if (key === '3') {
      localStorage.clear();
      props.props.dispatch({
        type: 'logout/logout',
      });
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick} style={{ padding: '5px 10px' }}>
      {/*<Menu.Item key="1">个人中心</Menu.Item>*/}
      {/*<Menu.Item key="2">修改密码</Menu.Item>*/}
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Avatar className={styles.avatar} src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb"/>
    </Dropdown>
  );
};

@connect(({ global, logoutToNamespace, loading }) => ({
  global, logoutToNamespace,
  logoutLoding: loading.effects['logoutToNamespace/platformLogout'],
}))

class BasicLayout extends Component {

  toggleCollapsed = () => {
    const { global: { openKeys, collapsed } } = this.props;
    this.setState({ lastOpenKey: openKeys });
    this.props.dispatch({
      type: 'global/toggle',
      payload: !collapsed,
    });
    if (collapsed) {
      this.props.dispatch({
        type: 'global/onopen',
        payload: this.state.lastOpenKey,
      });
    } else {
      this.props.dispatch({
        type: 'global/onopen',
        payload: '',
      });
    }
  };

  onSelect = (data) => {
    this.props.dispatch({
      type: 'global/onselect',
      payload: data,
    });
  };
  onOpenChange = (data) => {
    this.props.dispatch({
      type: 'global/onopen',
      payload: data,
    });
  };


  render() {
    const { props, global: { openKeys, selectedKeys, collapsed }, logoutLoding } = this.props;
    return (
        <Layout>
          <Sider
            width={256}
            style={{ minHeight: '100vh' }}
          >
            <div className={styles.logo}><h2>Nora</h2></div>
            <SideBar
              //collapsed={this.state.collapsed}
              collapsed={false}
              onSelect={this.onSelect}
              onOpenChange={this.onOpenChange}
              openKeys={openKeys}
              selectedKeys={selectedKeys}
            />
          </Sider>
          <Layout >
            <Header style={{ background: '#fff', textAlign: 'right', paddingRight: 0 }}>
              {/*<Icon*/}
              {/*className={styles.trigger}*/}
              {/*type={'menu-unfold'}*/}
              {/*onClick={this.toggleCollapsed}*/}
              {/*/>*/}
              <span style={{marginRight:10}}>Hello</span>
              <UserMenu props={this.props}/>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Nora ©2019 Created by Taylor</Footer>
          </Layout>
        </Layout>
    )
  }
}

export default BasicLayout;
