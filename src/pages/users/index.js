import React, { Component } from 'react';
import { Table, Divider,Button, Form,Popconfirm } from 'antd';
import { connect } from 'dva';
import UserModal from './components/UserModal';
import styles from './index.less';

class Index extends Component {

   columns = [{
    title: '登陆账号',
    dataIndex: 'empCode',
    key: 'empCode',
  }, {
    title: '用户名',
    dataIndex: 'empName',
    key: 'empName',
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
        <UserModal record={record} onOk={this.editUser.bind(null, record.guid)} title='编辑用户'>
            <a>编辑</a>
          </UserModal>
      <Divider type="vertical"/>
                <Popconfirm title={'确认删除'} okText='确认' cancelText='取消'
                            onConfirm={() => this.deleteUser(record.guid)}>
            <a>删除</a>
          </Popconfirm>
    </span>
    ),
  }];

  componentDidMount() {
    this.props.dispatch({
      type: 'users/queryList',
    });
  }

  addUser = (values) => {
    this.props.dispatch({
      type: 'users/addUser',
      payload: values,
    });
  };

  editUser = (guid,values) => {
    this.props.dispatch({
      type: 'users/editUser',
      payload: {guid,...values},
    });
  };

  deleteUser = (guid) => {
    this.props.dispatch({
      type: 'users/deleteUser',
      payload: {guid:guid},
    });
  };

  render(){
    const { usersList, usersLoading} = this.props;

    return(
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={this.addUser} title='添加用户'>
            <Button type="primary">新增</Button>
          </UserModal>
        </div>
        <Table columns={this.columns} dataSource={usersList} loading={usersLoading} rowKey='guid'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    usersLoading: state.loading.effects['users/queryList'],
  };
}

export default connect(mapStateToProps) (Form.create()(Index));
