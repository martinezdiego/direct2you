import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar.jsx';
import NavFooter from '../components/shared/footer';
import ContentDash from './Dashboard2/ContentDash';


class Dashboard2 extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Navbar isLogged={false}/>
          <Layout className="container-sider-content">
            <Sidebar side=""/>
            <ContentDash />
          </Layout>
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default Dashboard2;
