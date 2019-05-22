import React,{ Component }  from 'react';
import {Form, Modal, Tree} from 'antd';
import { connect } from 'dva';

class SelectMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy: false,
      checkedKeys:[],
    };
  }

  showModalHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
    const { guid} = this.props.record;
    this.props.dispatch({
      type: 'roles/queryRoleMenu',
      payload: {roleId:guid},
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      destroy: true
    });
  };

  okHandler = () => {
    const {onOk} = this.props;
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
        onOk(this.state.checkedKeys);
        this.hideModelHandler();
    //   }
    // });
  };

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
    this.setState(
      {checkedKeys}
    )
  };

  render() {
    const { children,title,checkedKeys,menusLoading } = this.props;
    return (
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
        loading={menusLoading}
      >
        <Tree
          treeData={this.props.treeData}
          checkable={true}
          defaultCheckedKeys={checkedKeys}
          style={{width: 300}}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        />
      </Modal>
      </span>
    )

}

}

function mapStateToProps(state) {
  return {
    checkedKeys:state.roles.checkedKeys,
    menusLoading: state.loading.effects['roles/queryRoleMenu'],
  };
}

export default connect(mapStateToProps) (SelectMenu);
