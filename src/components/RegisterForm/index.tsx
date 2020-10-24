import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { Container, Logins, FormHeader } from './styles';

interface LoginProps {
  switchToggle: (type: string) => void
}

const RegisterForm: React.FC<LoginProps> = ({ switchToggle }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const handelToggle = () => {
    switchToggle('login')
  }
  return (
    <Container>
      <Logins>
        <FormHeader>
          <p>注册</p>
          <p onClick={handelToggle}>登录</p>
        </FormHeader>


        <Form
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item

            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item

            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item

            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Row style={{ marginBottom: "20px" }}>
            <Col span={17}>
              <Input placeholder="请输入验证码" />
            </Col>
            <Col span={7} >
              <Button type="primary" block> 发送验证码</Button>
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

export default RegisterForm;
