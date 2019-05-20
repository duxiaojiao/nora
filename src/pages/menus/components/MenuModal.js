import React, { Component } from 'react';
import { Modal, Form, Input,TreeSelect  } from 'antd';
import {connect} from "dva/index";

const FormItem = Form.Item;

class MenuModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy:false,
    };
  }

  componentDidMount() {
    // console.log('测试111111');
    // this.props.dispatch({
    //   type: 'menus/queryMenuSelectTree',
    // });
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
    const { children,title,menuSelectTree } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { menuName, menuCode, route,icon} = this.props.record;
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
              label="菜单名称"
            >
              {getFieldDecorator('menuName', {
                rules: [{ required: true }],
                initialValue: menuName,
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="菜单编码"
            >
              {getFieldDecorator('menuCode',{
                rules: [{ required: true }],
                initialValue: menuCode,
              })(
                <Input />
              )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="上级菜单"
              >
              {getFieldDecorator('parentId',{
                // rules: [{ required: true }],
                initialValue: menuName,
              })(
                <TreeSelect
                  // style={{ width: 300 }}
                  //value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={menuSelectTree}
                  placeholder="Please select"
                  treeDefaultExpandAll
                  // onChange={this.onChange}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="路由"
            >
              {getFieldDecorator('route',{
                initialValue: route,
              })(
                <Input />
              )}
            </FormItem>
              <FormItem
                {...formItemLayout}
                label="图标"
              >
              {getFieldDecorator('icon',{
                // rules: [{ required: true }],
                initialValue: icon,
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuSelectTree: state.menus.menuSelectTree,
    menusLoading: state.loading.effects['menus/queryMenuSelectTree'],
  };
}

export default connect(mapStateToProps) (Form.create()(MenuModal));
