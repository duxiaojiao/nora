import React,{ Component }  from 'react';
import {Form, Modal, TreeSelect} from 'antd';

class SelectMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      destroy: false
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
    //     onOk(values);
        this.hideModelHandler();
    //   }
    // });
  };

  render() {
    const { children,title } = this.props;
    return (
      <span>
        <span onClick={this.showModalHandler}>
          { children }
        </span>
      <Modal
        title={title}
        visible={this.state.visible}
        //visible={this.props.modalVisible&&this.state.visible}
        destroyOnClose={this.state.destroy}
        onOk={this.okHandler}
        onCancel={this.hideModelHandler}
      >
        <TreeSelect
          treeData={this.props.treeData}
          treeCheckable={true}
          style={{width:300}}
          searchPlaceholder='Please select'
          showCheckedStrategy='SHOW_PARENT'
        />
      </Modal>
              </span>
    )

}

}

export default SelectMenu;
