import { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy:false
    };
  }

  showModalHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      destroy:true
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

  render() {
    const { children,title } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { empCode, empName, phone,email } = this.props.record;
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
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserModal);
