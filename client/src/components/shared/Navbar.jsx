import React, { PureComponent } from 'react';
import { Layout, Button, Space,Menu, Dropdown } from 'antd';
import { BellOutlined, MenuOutlined, UserOutlined, 
        DownOutlined, GlobalOutlined,
        UnorderedListOutlined,
        SettingFilled, UserSwitchOutlined } from '@ant-design/icons';
import userpic from '../../assets/img/user-icon-image-13.jpg';

const { Header } = Layout;
const {SubMenu} = Menu;

class Navbar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { hidenav: false };
      }
      
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        let currentHideNav = (window.innerWidth <= 660);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hideNav: currentHideNav});
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    
    render(){        
        const isLogged = this.props.isLogged;
        const menu = (
            <Menu >
                <SubMenu title="Afiliarme">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <a href="/registrarse">Afiliame como usuario</a>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<GlobalOutlined />}>
                        <a href="/registrar-empresa">Afiliame como empresa</a>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="2" icon={<UserOutlined />}>
                <a href='/ingresar'>Ingresar</a>
                </Menu.Item>
            </Menu>
        );
        const menu_registro = (
            <Menu >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <a href="/registrarse">Afiliame como usuario</a>
              </Menu.Item>
              <Menu.Item key="2" icon={<GlobalOutlined />}>
                <a href="/registrar-empresa">Afiliame como empresa</a>
              </Menu.Item>
            </Menu>
        );

        const menu_user = (
            <Menu>
                <Menu.Item key="ver_pedidos" icon={<UnorderedListOutlined />}>
                    Mis Pedidos
                </Menu.Item>
                <Menu.Item key="ajustes" icon={<SettingFilled />}>
                    <a href="/perfil-user">Ajustes</a>
                </Menu.Item>
                <Menu.Item key="desconectar" icon={<UserSwitchOutlined />}>
                    Salir
                </Menu.Item>
            </Menu>
        );
    
        if (this.state.hideNav){
            if (isLogged){
                return(
                    <Header className="navbar">
                        <ul className="nav-ul-left">
                            <li className="nav-title">Direct2You</li>
                        </ul>
                        <ul className="nav-ul-right">
                            <li>
                                <Dropdown overlay={menu_user}>
                                    <li><img src={userpic} className="nav-user-img" alt=''></img></li>
                                </Dropdown>
                            </li>
                        </ul>
                    </Header>
                )
            }else{
                return(
                    <Header className="navbar">
                        <ul className="nav-ul-left">
                            <li>
                                <Dropdown overlay={menu}>
                                    <li><MenuOutlined className="menu-icon"/></li>
                                </Dropdown>
                            </li>

                            <li className="nav-title">Direct2You</li>
                        </ul>
                    </Header>
                )
            }
        }else if (isLogged){
            return(
                <Header className="navbar">
                    <ul className="nav-ul-left">
                        <li><MenuOutlined className="menu-icon"/></li>
                        <li className="nav-title">Direct2You</li>
                    </ul>
                    <ul className="nav-ul-right">
                        <li><BellOutlined /></li>
                        <Dropdown overlay={menu_user}>
                            <li><img src={userpic} className="nav-user-img" alt=''></img></li>
                        </Dropdown>
                    </ul>
                </Header>
            )
        }else{
            return(
                <Header className="navbar">
                    <ul className="nav-ul-left">
                        <li><MenuOutlined className="menu-icon"/></li>
                        <li className="nav-title">Direct2You</li>
                    </ul>
                    <ul className="nav-ul-right">
                        <Space>
                            <Dropdown.Button overlay={menu_registro} placement="bottomCenter" icon={<DownOutlined />} >
                                Afiliarme
                            </Dropdown.Button>

                            <Button href="/ingresar" type="default" >
                                Ingresar
                            </Button>
                        </Space>
                    </ul>
                </Header>
            )
        }
    };
}

export default Navbar;