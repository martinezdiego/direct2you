import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';
import NavFooter from '../components/shared/footer';
import ContentDash from '../components/shared/ContentDash';


function Dashboard2(props) {

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

export default Dashboard2;
