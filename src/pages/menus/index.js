import React, { Component } from 'react';
import { Table, Divider,Button, Form,Popconfirm } from 'antd';
import { connect } from 'dva';
import MenuModal from './components/MenuModal';
import styles from './index.less';



class Index extends Component {


   columns = [{
    title: '菜单名称',
    dataIndex: 'menuName',
    key: 'menuName',
  }, {
    title: '菜单编码',
    dataIndex: 'menuCode',
    key: 'menuCode',
  }, {
    title: '路由',
    dataIndex: 'route',
    key: 'route',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <MenuModal record={record} onOk={this.editMenu.bind(null, record.key)} title='编辑菜单'>
            <a>编辑</a>
        </MenuModal>
      <Divider type="vertical"/>
                <Popconfirm title={'确认删除'}
                            onConfirm={() => this.deleteMenu(record.key)}>
            <a>删除</a>
          </Popconfirm>
    </span>
    ),
  }];


  componentDidMount() {
    this.props.dispatch({
      type: 'menus/queryMenu',
    });
  }

  addMenu = (values) => {
    this.props.dispatch({
      type: 'menus/addMenu',
      payload: values,
    });
  };

  editMenu = (key,values) => {
    this.props.dispatch({
      type: 'menus/editMenu',
      payload: {key,values},
    });
  };

  deleteMenu = (key) => {
    this.props.dispatch({
      type: 'menus/deleteMenu',
      payload: {key:key},
    });
  };


  render(){
    const { menusList, menusLoading} = this.props;
    console.log(this.props);

    return(
      <div>
        <div className={styles.create}>
          <MenuModal record={{}} onOk={this.addMenu} title='添加菜单'>
            <Button type="primary">新增</Button>
          </MenuModal>
        </div>
        <Table columns={this.columns} dataSource={menusList} loading={menusLoading} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menusList: state.menus.menusList,
    menusLoading: state.loading.effects['menus/queryMenu'],
  };
}

export default connect(mapStateToProps) (Form.create()(Index));
