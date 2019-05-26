import React,{ Component } from 'react'
import { Modal, Form, Input,Icon } from 'antd'
import { connect } from 'dva'
import * as rolesService from "@/pages/roles/services/roles";


const FormItem = Form.Item;
class ResetPwd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy:false,
      value: [],
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
      destroy:true,
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

  render(){
    const { children,title } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return(
      <span>
      <span onClick={this.showModalHandler}>
          {children}
        </span>
      <Modal
        title={title}
        visible={this.state.visible}
        destroyOnClose={this.state.destroy}
        onOk={this.okHandler}
        onCancel={this.hideModelHandler}
      >
         <Form onSubmit={this.okHandler}>
             <FormItem
               {...formItemLayout}
               label="密码"
             >
              {getFieldDecorator('password', {
                initialValue: '123456',
                rules: [
                  {
                    required: true,message: '请输入密码!'
                  },
                ],
              })
              (
                <Input
                  type="password"
                  // onPressEnter={this.handleOk}
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='密码'
                />
              )}
            </FormItem>
         </Form>
      </Modal>
      </span>
    )
  }


}

function mapStateToProps(state) {
  return {
    // userDetail:state.users.userDetail,
  };
}

export default connect(mapStateToProps) (Form.create()(ResetPwd));
