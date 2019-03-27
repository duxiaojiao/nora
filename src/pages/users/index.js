import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';



class Index extends Component {


  render(){
    const columns = [{
      title: '登陆账号',
      dataIndex: 'account',
      key: 'account',
    }, {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email',
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
      account:'admin',
      name: '管理员',
      phone: '15821392942',
      email: '376525082@qq.com',
    }, {
      key: '2',
      account:'guest',
      name: '游客',
      phone: '15878921234',
      email: 'wangyi@163.com',
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
