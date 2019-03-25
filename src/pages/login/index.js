import React, { Component } from 'react';
import { Button, Row, Form, Icon, Input } from 'antd'


const FormItem = Form.Item
class Index extends Component {


  render() {
    const { loading, form} = this.props
    const { getFieldDecorator } = form

    return (
      <div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Input
                onPressEnter={this.handleOk}
                placeholder='用户名'
              />
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Input
                type="password"
                onPressEnter={this.handleOk}
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

            </Button>
          </Row>
        </form>
    </div>
    );
  }

}

export default Form.create()(Index);;
