import React, { Component } from 'react';
import { Menu, Icon, Spin } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import { getMenu } from '../common/menu';

const SubMenu = Menu.SubMenu;

class Side extends Component {
  state = {
    loading: false,
    menu: [],
  };
  onSelect = ({ key }) => {
    this.props.onSelect(key);
  };
  onOpenChange = (e) => {
    this.props.onOpenChange(e[1]);
  };

  componentWillMount() {
    this.setState({ loading: true });
    if (sessionStorage.getItem('selectedKeys')) {
      this.onSelect({ key: sessionStorage.getItem('selectedKeys') });
      this.onOpenChange(['', sessionStorage.getItem('selectedKeys')[0]]);
    }
    // getMenu((res) => {
    //   this.setState({ menu: res, loading: false });
    // });

    // this.props.dispatch({
    //   type: 'menu/queryMenuTree',
    // });
    this.props.dispatch({
      type: 'menu/queryUserMenuTree',
    });

    this.props.dispatch({
      type: 'accountInfo/accountInfo',
    });
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const { openKeys, selectedKeys,menusList,menusLoading } = this.props;
    const { menu, loading } = this.state;
    sessionStorage.setItem('selectedKeys', selectedKeys);
    return (
      <Spin spinning={menusLoading} tip='菜 单 加 载 中 ...'>
        <Menu
          onClick={this.onSelect}
          onOpenChange={this.onOpenChange}
          mode="inline"
          theme="dark"
          openKeys={[openKeys]}
          selectedKeys={[selectedKeys]}
          style={{ minHeight: 400 }}
        >
          {
            menusList && menusList.map((item) => (
              item.children ?
                SubMenuItem(item)
                :
                MenuItem(item)
            ))
          }
        </Menu>
      </Spin>
    );
  }
}

// const MenuItem = (data) => {
//   return (
//     <Menu.Item key={data.path}>
//       <Link to={data.path}>
//         <Icon type={data.icon}/>
//         <span>{data.name}</span>
//       </Link>
//     </Menu.Item>
//   );
// };
// const SubMenuItem = (data) => {
//   return (
//     <SubMenu key={data.name} title={<span><Icon type={data.icon}/><span>{data.name}</span></span>}>
//       {
//         data.children && data.children.map(item => (
//           <Menu.Item key={item.path}><Link to={item.path}><Icon type={item.icon} />{item.name}</Link></Menu.Item>
//         ))
//       }
//     </SubMenu>
//   );
// };

const MenuItem = (data) => {
  return (
    <Menu.Item key={data.key}>
      <Link to={data.router}>
        {data.icon!==''&&(<Icon type={data.icon}/>)}
        <span>{data.menuName}</span>
      </Link>
    </Menu.Item>
  );
};
const SubMenuItem = (data) => {
  return (
    <SubMenu key={data.menuName} title={<span> {data.icon!==''&&(<Icon type={data.icon}/>)}<span>{data.menuName}</span></span>}>
      {
        data.children && data.children.map(item => (
          <Menu.Item key={item.router}><Link to={item.router}><Icon type={item.icon} />{item.menuName}</Link></Menu.Item>
        ))
      }
    </SubMenu>
  );
};

function mapStateToProps(state) {
  return {
    menusList: state.menu.menusList,
    menusLoading: state.loading.effects['menu/queryUserMenuTree'],
  };
}

export default connect(mapStateToProps) (Side);
