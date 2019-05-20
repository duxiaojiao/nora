import React,{ Component } from 'react';
import { Modal, Form, Input,DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

class RoleModal extends Component {

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
    const { roleCode,roleName,roleDescr,date} = this.props.record;
    console.log(date);
    const dateFormat = 'YYYY-MM-DD';
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
              label="角色编码"
            >
              {getFieldDecorator('roleCode', {
                rules: [{required: true}],
                initialValue: roleCode,
              })(
                <Input/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="角色名称"
            >
              {getFieldDecorator('roleName', {
                rules: [{ required: true }],
                initialValue: roleName,
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="角色别名"
            >
              {getFieldDecorator('roleDescr',{
                rules: [{ required: true }],
                initialValue: roleDescr,
              })(
                <Input />
              )}
            </FormItem>
            {/*<FormItem*/}
              {/*{...formItemLayout}*/}
              {/*label="创建时间"*/}
            {/*>*/}
              {/*{getFieldDecorator('date',{*/}
                {/*initialValue: typeof(date)==='undefined'?null:moment(date, dateFormat),*/}
              {/*})*/}
              {/*(*/}
                {/*<DatePicker format={dateFormat} />*/}
              {/*)}*/}
            {/*</FormItem>*/}
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(RoleModal);
