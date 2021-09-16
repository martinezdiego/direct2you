import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from './Dashboard2/Sidebar';
import NavFooter from '../components/shared/footer';
import ContentRegPedido from './RegistrarPedido/ContentRegPedido';

class AddPedido extends PureComponent {
  render(){
    return (
    <>
        <Layout>
            <Navbar isLogged={true}/>
            <ContentRegPedido />
            <NavFooter />
        </Layout>
    </>
    );
  }
}

export default AddPedido;
