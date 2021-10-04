import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ContentPerfilUser from './PerfilUser/ContentPerfilUser';


class PerfilUser extends PureComponent {
  render(){
    return (
    <>
        <Layout>
            <Navbar isLogged={true}/>
            <ContentPerfilUser />
            <NavFooter />
        </Layout>
    </>
    );
  }
}

export default PerfilUser;
