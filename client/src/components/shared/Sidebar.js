import React from 'react';
import { Menu, Switch, Divider, Layout } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  InboxOutlined,
  ShopOutlined,
  CarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import '../../assets/css/Sidebar.css';

const { SubMenu } = Menu;
const {Sider} = Layout

function Sidebar(props) {

    const [mode, setMode] = React.useState('inline');
    const [theme, setTheme] = React.useState('light');

    const changeMode = value => {
        setMode(value ? 'vertical' : 'inline');
    };

    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light');
    };

    return(
        <>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                background:'#fff'
            }}
        >            
            <Menu
                style={{ width: 256, fontSize: '16px' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}

            >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                Tablero
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
                <Menu.Item key="2">Clientes</Menu.Item>
                <Menu.Item key="3">Nuestro equipo</Menu.Item>                
                </SubMenu>
                <SubMenu key="sub2" icon={<ShoppingOutlined />} title="Productos">
                <Menu.Item key="4">Ver productos</Menu.Item>
                <Menu.Item key="5">Añadir producto</Menu.Item>                
                </SubMenu>
                <SubMenu key="sub3" icon={<InboxOutlined />} title="Pedidos">
                <Menu.Item key="6">Ver pedidos</Menu.Item>
                <Menu.Item key="7">Completar pedido</Menu.Item>                
                </SubMenu>
                <SubMenu key="sub4" icon={<ShopOutlined />} title="Sucursal/Almacén">
                <Menu.Item key="8">Ver unidades</Menu.Item>
                <Menu.Item key="9">Registrar unidad</Menu.Item>                
                </SubMenu>
                <SubMenu key="sub5" icon={<CarOutlined />} title="Transporte">
                <Menu.Item key="10">Ver unidades</Menu.Item>
                <Menu.Item key="11">Registrar unidad</Menu.Item>                
                </SubMenu>
                <SubMenu key="sub6" icon={<DollarCircleOutlined />} title="Facturación">
                <Menu.Item key="12">Registrar factura</Menu.Item>                
                </SubMenu>               
            </Menu>

            <br />
            <br />
            <Switch onChange={changeMode} /> Change Mode
            <Divider type="vertical" />
            <Switch onChange={changeTheme} /> Change Style            
        </Sider>
        </>
    );
}

export default Sidebar;