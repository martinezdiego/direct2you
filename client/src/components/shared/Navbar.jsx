import React from 'react';
import { Layout, Button, Space } from 'antd';
import { BellOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons';
import '../../assets/css/Navbar.css';
import userpic from '../../assets/img/user-icon-image-13.jpg';

const { Header } = Layout;

function Navbar(props) {
    const isLogged = props.isLogged;
    if (isLogged){
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
    return(
        <Header className="navbar">
            <ul className="nav-ul-left">
                <li><MenuOutlined className="menu-icon"/></li>
                <li className="nav-title">Direct2You</li>
            </ul>
            <ul className="nav-ul-right">
                <Space>
                    <Button href="#registro" type="default" icon={<HomeOutlined />}>
                        Afiliarme
                    </Button>
                    <Button href="#login" type="default" >
                        Ingresar
                    </Button>
                </Space>
            </ul>
        </Header>
    );
}

export default Navbar;