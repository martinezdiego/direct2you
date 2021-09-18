import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import {} from '@ant-design/icons'
import {  } from '@ant-design/icons';

import {
  StarOutlined,
  FireOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  createFromIconfontCN
} from '@ant-design/icons';

const { SubMenu } = Menu;
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2761503_o0ehhr7f7pf.js'
  });
  
function MenuPanel(props){
    const handleClick = (e) =>{
        console.log('click', e);
      }
      
    if (props.panel === 'category'){
        return(
            <Menu onClick={handleClick} className="text-menu-sider" mode="inline">
                <SubMenu key="Categories" icon={<ShopOutlined />} title="Categorias">
                    <Menu.Item key="cat1">Comida Rapida</Menu.Item>
                    <Menu.Item key="cat2">Bebidas</Menu.Item>
                    <Menu.Item key="cat3">Postres</Menu.Item>
                    <Menu.Item key="cat4">Ensaladas</Menu.Item>
                    <Menu.Item key="cat5">Entradas</Menu.Item>
                </SubMenu>
          </Menu>        
        )
    }else{
        return(
            <Menu
                className="text-menu-sider"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode="vertical"
            >
                <SubMenu  key="stars" icon={<StarOutlined />} title="Destacados">
                    <Menu.Item className="text-submenu-sider" key="star1">Destacado1</Menu.Item>
                    <Menu.Item className="text-submenu-sider" key="star2">Destacado2</Menu.Item>                
                </SubMenu>
                <SubMenu key="shop" icon={<ShoppingCartOutlined />} title="Mercado">
                    <Menu.Item className="text-submenu-sider" key="shop1">Mercado1</Menu.Item>
                    <Menu.Item className="text-submenu-sider" key="shop2">Mercado2</Menu.Item>                
                </SubMenu>
                <SubMenu key="restaurant" icon={<ShopOutlined />} title="Restaurante">
                    <Menu.ItemGroup title={<div className="text-submenu-sider">Restaurante 1</div>}>
                        <Menu.Item className="text-submenu-sider" key="res1-1">Comida 1</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="res1-2">Comida 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title={<div className="text-submenu-sider">Restaurante 2</div>}>
                        <Menu.Item className="text-submenu-sider" key="res2-1">Comida 1</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="res2-2">Comida 2</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="postres" icon={<MyIcon type="icon-icons8-pastel_de_nata" />} title="Postres">
                    <Menu.Item className="text-submenu-sider" key="postre1">Helados</Menu.Item>
                    <Menu.Item className="text-submenu-sider" key="postre2">Tortas</Menu.Item>                
                </SubMenu>
                <SubMenu key="desayunos" icon={<MyIcon type="icon-food" />} title="Desayunos">
                    <Menu.Item className="text-submenu-sider" key="desayuno1">Arepas</Menu.Item>
                    <Menu.Item className="text-submenu-sider" key="desayuno2">huevos revueltos</Menu.Item>                
                </SubMenu>
                <SubMenu key="nacional" icon={<FireOutlined />} title="Nacional">
                    <Menu.ItemGroup title={<div className="text-submenu-sider">Merida</div>}>
                        <Menu.Item className="text-submenu-sider" key="merida1">Top Empresa 1</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="merida2">Top Empresa 2</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="merida3">Top Empresa 3</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title={<div className="text-submenu-sider">Trujillo</div>}>
                        <Menu.Item className="text-submenu-sider" key="trujillo1">Top Empresa 1</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="trujillo2">Top Empresa 2</Menu.Item>
                        <Menu.Item className="text-submenu-sider" key="trujillo3">Top Empresa 3</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>               
            </Menu>
        );
    }
}
class SiderMenu extends PureComponent{
    render(){
        const type = this.props.type
        if (type === 'category'){
            return(
                <MenuPanel panel='category'/>
            );
        }else{
            return(
                <div>
                    <MenuPanel panel=''/>
                </div>
            ); 
        }
    }        
}

export default SiderMenu;