import React, { Component } from 'react';
import { Modal, Form, Input,TreeSelect,InputNumber,Select  } from 'antd';
import {connect} from "dva/index";

const FormItem = Form.Item;
const { Option } = Select;
class MenuModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy:false,
    };
  }

  componentDidMount() {
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
    const { children,title,menuSelectTree,permission } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { menuName, menuCode, router,icon,parentId,menuType,permissions,sorter} = this.props.record;
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
                initialValue: parentId,
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
              {getFieldDecorator('router',{
                initialValue: router,
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
            <FormItem
              {...formItemLayout}
              label="类型"
            >
              {getFieldDecorator('menuType',{
                rules: [{ required: true ,message: '请选择菜单类型！' }],
                initialValue: menuType,
              })(
                <Select
                  placeholder="选择菜单类型"
                  // onChange={this.handleSelectChange}
                >
                  <Option value="1">一级菜单</Option>
                  <Option value="2">子菜单</Option>
                  <Option value="3">按钮</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="权限标识"
            >
              {getFieldDecorator('permissions',{
                initialValue: permissions,
              })(
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="请选择"
                  // defaultValue={['a10', 'c12']}
                  // onChange={handleChange}
                >
                  {permission.map((item,index)=><Option key={index} value={item.permission}>{item.name+item.method+item.mapping}</Option>)}
                </Select>,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="排序"
            >
              {getFieldDecorator('sorter',{
                initialValue: sorter,
              })(
                <InputNumber min={0} style={{width: 280}}/>
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
    permission:state.menus.permission,
    menusLoading: state.loading.effects['menus/queryMenuSelectTree'],
  };
}

export default connect(mapStateToProps) (Form.create()(MenuModal));
