import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentRegistroEmpresa from './RegistroEmpresa/ContentRegistroEmpresa';


class RegistroEmpresa extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <ContentRegistroEmpresa />
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default RegistroEmpresa;