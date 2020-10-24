import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { Container, Logins, FormHeader } from './styles';

interface LoginProps {
  switchTogel: (type: string) => void
}


const LoginForm: React.FC<LoginProps> = ({ switchTogel }) => {

  const [loginLoding, setLoginLoding] = useState<boolean>(false)
  const [loginText, setLoginText] = useState<string>('发送验证码')
  const [show, setShow] = useState<boolean>(false)
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const handelToggle = () => {
    switchTogel('register')
  }
  const handelCode = () => {
    setLoginLoding(true)
    setLoginText('发送中')
  }

  return (
    <Container>
      <Logins>
        <FormHeader>
          <p>登录</p>
          <p onClick={handelToggle}>注册</p>
        </FormHeader>
        <Form
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item

            name="email"
            rules={[{ required: true, message: '请输入正确的邮箱' }, ({ getFieldValue }) => ({
              validator(rule, value) {
                var reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
                if (reg.test(value)) {
                  return Promise.reject('邮箱不正确')
                } else {
                  setShow(true)
                  return Promise.resolve()
                }

              }
            })]}
          >
            <Input />
          </Form.Item>

          <Form.Item

            name="password"
            rules={[{ required: true, message: '密码不能为空' }, ({ getFieldValue }) => ({
              validator(rule, value) {
                console.log(value);
                if (value.legth < 6) {
                  return Promise.reject('不能小于6位')
                }
                return Promise.resolve()

              }
            })]}
          >
            <Input.Password />
          </Form.Item>

          <Row style={{ marginBottom: "20px" }}>
            <Col span={17}>
              <Input placeholder="请输入验证码" />
            </Col>
            <Col span={7} >
              <Button type="primary" block onClick={handelCode} disabled={show} loading={loginLoding}> {loginText}</Button>
            </Col>
          </Row>

          <Form.Item >
            <Button type="primary" htmlType="submit" style={{ width: " 100%" }}>
              登录
        </Button>
          </Form.Item>
        </Form>
      </Logins>
    </Container>
  );
};

export default LoginForm;
