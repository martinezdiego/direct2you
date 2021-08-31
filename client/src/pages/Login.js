import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentLogin from './Login/ContentLogin';


class Login extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <ContentLogin />
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default Login;
