import React,{ Component }  from 'react';
import {Modal, Tree} from 'antd';
import * as rolesService from '../services/roles';

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
    const { guid} = this.props.record;
    const data={
      roleId:guid,
    };
   rolesService.queryRoleMenu(data).then(
     res=>{
       this.setState({
         visible: true,
         checkedKeys: res.data,
       });
     }
   );


  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
      destroy: true,
      checkedKeys:[],
    });
  };

  okHandler = () => {
    const {onOk} = this.props;
    onOk(this.state.checkedKeys);
    this.hideModelHandler();
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
    const { children,title,menusLoading } = this.props;
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
          defaultExpandedKeys={this.state.checkedKeys}
          defaultSelectedKeys={this.state.checkedKeys}
          defaultCheckedKeys={this.state.checkedKeys}
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
