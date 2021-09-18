import React, { PureComponent, useState } from 'react';
import { Layout, Drawer, Button, Space } from 'antd';
import {ColumnWidthOutlined} from '@ant-design/icons';
import SiderMenu from './Sidebar/SiderMenu';

const {Sider} = Layout


function DrawerC (props){
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState();
  
    const showDefaultDrawer = () => {
      setSize('default');
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    if (props.menu === 'category'){
        return (
            <>
            <div style={{alignItems:'left'}}>
                <Button style={{backgroundColor:'#ffff'}} onClick={showDefaultDrawer} icon={<ColumnWidthOutlined />} />
            </div>
            <Drawer
            title='Tablero'
            placement="left"
            size={size}
            onClose={onClose}
            visible={visible}
            >
                <SiderMenu type="category"/>
            </Drawer>
            </>
        )    
    }else{    
        return (
        <>
            <div style={{alignItems:'left'}}>
                <Button style={{backgroundColor:'#ffff'}} onClick={showDefaultDrawer} icon={<ColumnWidthOutlined />} />
            </div>
            <Drawer
            title='Tablero'
            placement="left"
            size={size}
            onClose={onClose}
            visible={visible}
            >
                <SiderMenu type=""/>
            </Drawer>
        </>
        )
    }
};
  
class Sidebar extends PureComponent{
    constructor(props) {
        super(props);
        this.state = { hidesider: false };
      }
      
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        let currentHideNav = (window.innerWidth <= 660);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hidesider: currentHideNav});
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render(){
        if (this.state.hidesider){
            if (this.props.side === 'category'){
                return(
                    <div className="drawer-handle">
                        <DrawerC menu='category'/>
                    </div>
                )
            }else{
                return(
                    <div className="drawer-handle">
                        < DrawerC menu=""/>
                    </div>
                )
            }
        }else{
            if (this.props.side === 'category'){
                return(
                    <>
                    <Sider
                        collapsible
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            background:'#fff',
                        }}
                    > 
                        <SiderMenu type="category"/>           
                    </Sider>
                    </>
                )    
            }else{
                return(
                    <>
                    <Sider
                        collapsible
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            background:'#fff',
                        }}
                    > 
                        <SiderMenu type=""/>           
                    </Sider>
                    </>
                )
            }
        }
    };
}

export default Sidebar;