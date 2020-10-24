import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'


import { Container } from './styles';


const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<string>('login')

  const switchToggel = (value: string) => {
    setLoginType(value)
  }

  return (
    <Container>
      {
        loginType === "login" ? <LoginForm switchTogel={switchToggel} /> : <RegisterForm switchToggle={switchToggel} />
      }
    </Container>
  );
};


export default Login;
