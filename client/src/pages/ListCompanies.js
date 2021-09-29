import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar.jsx';
import NavFooter from '../components/shared/footer';
import ContentListComp from './ListCompanies/ContentListComp';
import LastHeader from '../components/shared/LastHeader';


class ListCompanies extends PureComponent {
  render(){
    return (
    <>
        <Layout style={{backgroundColor:'999999'}}>
          <Navbar isLogged={false}/>
          <LastHeader head=''/>
          <Layout className="container-sider-content">
            <Sidebar side=""/>
            <ContentListComp />
          </Layout>
          <NavFooter />
        </Layout>
    </>
    );
  }
}

export default ListCompanies;
