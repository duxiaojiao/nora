import { Component } from 'react';
import { Modal, Form, Input,TreeSelect } from 'antd';
import { connect } from 'dva';
import * as rolesService from "@/pages/roles/services/roles";

const FormItem = Form.Item;

class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy:false,
      value: [],
      rolesList:[],
    };
  }

  showModalHandler = (e) => {
    if (e) e.stopPropagation();
    // this.props.dispatch({
    //   type: 'roles/queryRole',
    // });
    rolesService.queryRole().then(
      res=>{
        this.setState({
          rolesList: res.data.records,
        });
      }
    )
    const {guid} = this.props.record;
    if (guid !== undefined) {
      this.props.dispatch({
        type: 'users/queryUserById',
        payload: {guid: guid},
      });
    };

    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      destroy:true,
      rolesList:[],
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const { children,title,userDetail } = this.props;
    const {rolesList}=this.state;
    const treeData = rolesList.map(data => ({title: data.roleName, value: data.guid, key: data.guid}));
    const { getFieldDecorator } = this.props.form;
    const { empCode, empName, phone,email,guid} = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModalHandler}>
          { children }
        </span>
        <Modal
          title={title}
          visible={this.state.visible}
          destroyOnClose={this.state.destroy}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form  onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="登陆账号"
            >
              {getFieldDecorator('empCode', {
                rules: [{ required: true }],
                initialValue: empCode,
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户名"
            >
              {getFieldDecorator('empName',{
                rules: [{ required: true }],
                initialValue: empName,
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码"
            >
              {getFieldDecorator('phone',{
                initialValue: phone,
              })
              (
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="邮箱"
            >
              {getFieldDecorator('email',{
                initialValue: email,
              })
              (
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="角色"
            >
              {getFieldDecorator('roleIds',{
                initialValue:guid !== undefined?userDetail.roleIds:null,
              })
              (
                <TreeSelect
                  searchPlaceholder='Please select'
                  showCheckedStrategy='SHOW_PARENT'
                  // value={this.state.value}
                  // onChange={this.onChange}
                  treeCheckable={true}
                  treeData={treeData}
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

function mapStateToProps(state) {
  console.log('测试',state);
  return {
    // rolesList: state.roles.rolesList,
    // rolesLoading: state.loading.effects['roles/queryRole'],
    userDetail:state.users.userDetail,
  };
}

export default connect(mapStateToProps) (Form.create()(UserModal));
