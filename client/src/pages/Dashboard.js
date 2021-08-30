import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';


class Dashboard extends PureComponent {
  render(){
    return (
    <>
      <Row style={{backgroundColor: '#f5f6f8'}}>
          <Col xs={24}>
              <Navbar/>
              <Sidebar/>
          </Col>
      </Row>
    </>
    );
  }
}

export default Dashboard;
