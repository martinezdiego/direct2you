import React from 'react';
import { Layout } from 'antd';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import '../../assets/css/navbar.css';
import userpic from '../../assets/img/user-icon-image-13.jpg';

const { Header } = Layout;

function Navbar(props) {

    return(
        <Header className="navbar">
            <ul className="nav-ul-left">
                <li><MenuOutlined className="menu-icon"/></li>
                <li className="nav-title">Direct2You</li>
            </ul>
            <ul className="nav-ul-right">
                <li><BellOutlined /></li>
                <li><img src={userpic} className="nav-user-img"/></li>
            </ul>
        </Header>
    );
}

export default Navbar;