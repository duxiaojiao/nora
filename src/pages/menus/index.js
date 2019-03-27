import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';



class Index extends Component {


  render(){
    const columns = [{
      title: '菜单名称',
      dataIndex: 'menuName',
      key: 'menuName',
    }, {
      title: '菜单编码',
      dataIndex: 'menuCode',
      key: 'menuCode',
    }, {
      title: '路由',
      dataIndex: 'route',
      key: 'route',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="javascript:;">编辑</a>
      <Divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
      ),
    }];

    const data = [{
      key: '1',
      menuName:'首页',
      menuCode: 'index',
      route: '/',
    }, {
      key: '2',
      menuName:'权限管理',
      menuCode: 'security',
    }, {
      key: '3',
      menuName:'用户管理',
      menuCode: 'user',
      route: '/users',
    }, {
      key: '4',
      menuName:'角色管理',
      menuCode: 'role',
      route: '/roles',
    }, {
      key: '5',
      menuName:'菜单管理',
      menuCode: 'menu',
      route: '/menus',
    }
    ];

    return(
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Index;
