import React, { Component } from 'react';
import { Table, Divider, Modal, Button, Form, Input,Popconfirm } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;

class Index extends Component {

  state = {
    visible: false
  };

   columns = [{
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
      <a onClick={() => this.editUser(record.key)}>编辑</a>
      <Divider type="vertical"/>
                <Popconfirm title={'确认删除'} okText='确认' cancelText='取消'
                            onConfirm={() => this.deleteUser(record.key)}>
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

  editUser = (key) => {
    // this.props.dispatch({
    //   type: 'users/editUser',
    //   payload: {key:key},
    // });
  };

  deleteUser = (key) => {
    this.props.dispatch({
      type: 'users/deleteUser',
      payload: {key:key},
    });
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'users/addUser',
          payload: values,
        });
        this.setState({ visible: false });
      }
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }


  render(){

    const { visible } = this.state;
    const { usersList, usersLoading, form: { getFieldDecorator } } = this.props;

    return(
      <div>
        <Table columns={this.columns} dataSource={usersList} loading={usersLoading} />

        <Button onClick={this.showModal} type='primary'>新增</Button>

        <Modal
          title="添加用户"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="登陆账号">
              {getFieldDecorator('account', {
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="用户名">
              {getFieldDecorator('name',{
                rules: [{ required: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="手机号码">
              {getFieldDecorator('phone')
              (
                <Input />
              )}
            </FormItem>
            <FormItem label="邮箱">
              {getFieldDecorator('email')
              (
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
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
