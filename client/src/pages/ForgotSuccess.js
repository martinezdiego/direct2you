import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ForgetOk from './ForgotSuccess/forgotSuccess';


class ForgotSuccess extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <ForgetOk />
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default ForgotSuccess;