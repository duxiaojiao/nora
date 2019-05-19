import React, { Component } from 'react';
import { Table, Divider,Button, Form,Popconfirm } from 'antd';
import { connect } from 'dva';
import RoleModal from './components/RoleModal';
import styles from './index.less';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
class Index extends Component {

  columns = [{
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName',
  }, {
    title: '角色描述',
    dataIndex: 'roleDescr',
    key: 'roleDescr',
  // }, {
  //   title: '创建时间',
  //   dataIndex: 'date',
  //   key: 'date',
  //   render:val => <span>{moment(val).format(dateFormat)}</span>,
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <RoleModal record={record} onOk={this.editRole.bind(null, record.guid)} title='编辑角色'>
            <a>编辑</a>
        </RoleModal>
      <Divider type="vertical"/>
                <Popconfirm title={'确认删除'}
                            onConfirm={() => this.deleteRole(record.guid)}>
            <a>删除</a>
          </Popconfirm>
    </span>
    ),
  }];


  componentDidMount() {
    this.props.dispatch({
      type: 'roles/queryRole',
    });
  }

  addRole = (values) => {
    this.props.dispatch({
      type: 'roles/addRole',
      payload: values,
    });
  };

  editRole = (guid,values) => {
    this.props.dispatch({
      type: 'roles/editRole',
      payload: {guid,...values},
    });
  };

  deleteRole = (guid) => {
    this.props.dispatch({
      type: 'roles/deleteRole',
      payload: {guid:guid},
    });
  };

  render(){
    const { rolesList, rolesLoading} = this.props;
    console.log(this.props);

    return(
      <div>
        <div className={styles.create}>
          <RoleModal record={{}} onOk={this.addRole} title='添加角色'>
            <Button type="primary">新增</Button>
          </RoleModal>
        </div>
        <Table columns={this.columns} dataSource={rolesList} loading={rolesLoading} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    rolesList: state.roles.rolesList,
    rolesLoading: state.loading.effects['roles/queryRole'],
  };
}

export default connect(mapStateToProps) (Form.create()(Index));
