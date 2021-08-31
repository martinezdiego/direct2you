import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentRegistro from './Registro/ContentRegistro.js';


class Registro extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <ContentRegistro />
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default Registro;