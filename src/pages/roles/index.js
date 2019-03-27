import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';



class Index extends Component {


  render(){
    const columns = [{
      title: '角色名称',
      dataIndex: 'role',
      key: 'role',
    }, {
      title: '角色别名',
      dataIndex: 'roleName',
      key: 'roleName',
    }, {
      title: '创建时间',
      dataIndex: 'date',
      key: 'date',
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
      role:'admin',
      roleName: '管理员',
      date: '2019-03-27',
    }, {
      key: '2',
      role:'user',
      roleName: '用户',
      date: '2019-03-27',
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
