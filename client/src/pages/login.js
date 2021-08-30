import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentLogin from './login/ContentLogin';


function Login(props) {

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

export default Login;
