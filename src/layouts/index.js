import { Component } from 'react';
import { Layout, Icon, Dropdown, Avatar, Menu, Spin } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './index.css';


const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;
const UserMenu = (props) => {
  const handleMenuClick = ({ key }) => {
    if (key === '3') {
      sessionStorage.clear();
      props.props.dispatch({
        type: 'logoutToNamespace/platformLogout',
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


  render() {
    return (this.props.location.pathname === '/login'?this.props.children:
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
              <Link to="/"></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
              <Menu.Item key="2"><Link to="/users">用户管理</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/users">用户管理</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/users">用户管理</Link></Menu.Item>
            </SubMenu>
          </Menu>
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
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Nora ©2019 Created by Taylor</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
