import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentRegistro from './Registro/ContentRegistro';


function Registro(props) {

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

export default Registro;