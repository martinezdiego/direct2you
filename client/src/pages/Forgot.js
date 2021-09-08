import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ForgetPassword from './Forgot/forgetPassword';


class Forgot extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <ForgetPassword />
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default Forgot;