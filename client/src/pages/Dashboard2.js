import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from './Dashboard2/Sidebar';
import NavFooter from '../components/shared/footer';
import ContentDash from './Dashboard2/ContentDash';


class Dashboard2 extends PureComponent {
  render(){
    return (
    <>
        <Layout>
          <Sidebar />
          <Layout style={{ marginLeft: 200 }}>
            <Navbar isLogged={false}/>
            <ContentDash />
            <NavFooter />
          </Layout>
        </Layout>
    </>
    );
  }
}

export default Dashboard2;
