import React,{ Component }  from 'react';
import {Form, Modal, Tree} from 'antd';

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
    const { children,title } = this.props;
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
      >
        <Tree
          treeData={this.props.treeData}
          checkable={true}
          style={{width: 300}}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        />
      </Modal>
      </span>
    )

}

}

export default SelectMenu;
