import React, { Component } from 'react';
import { Button, Row, Form, Icon, Input } from 'antd'
import { connect } from 'dva';
import styles from './index.less'

const modelPlatformLogin = 'loginToNamespace/platformLogin';
const FormItem = Form.Item


@connect(({ loginToNamespace, loading }) => ({
  loginToNamespace,
  submitLoading: loading.effects[modelPlatformLogin],
}))
class Index extends Component {

  handleOk = () => {
    const { dispatch, form } = this.props
    const { validateFieldsAndScroll } = form
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({type: modelPlatformLogin, payload: values,
      })
    })
  }


  render() {
    const { loading, form} = this.props
    const { getFieldDecorator } = form

    return (
      <div >
        <form className={styles.form}>
          <div className={styles.title}>
            <span>欢迎登录Nora项目</span>
          </div>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              initialValue:'admin',
              rules: [
                {
                  required: true, message: '请输入用户名!'
            },
              ],
            })(
              <Input
                onPressEnter={this.handleOk}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='用户名'
              />
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              initialValue:'123456',
              rules: [
                {
                  required: true,message: '请输入密码!'
                },
              ],
            })(
              <Input
                type="password"
                onPressEnter={this.handleOk}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='密码'
              />
            )}
          </FormItem>
          <Row>
            <Button
              type="primary"
              onClick={this.handleOk}
              // loading={loading.effects.login}
            >
            登录
            </Button>
          </Row>
        </form>
    </div>
    );
  }

}

export default Form.create()(Index);;
