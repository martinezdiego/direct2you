import React, { PureComponent } from 'react';
import {Layout, Col, Row, Divider, Steps} from 'antd'
import { UserAddOutlined, SmileOutlined, LoadingOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import LastHeader from '../../components/shared/LastHeader'
import '../../assets/css/home.css';

const { Step } = Steps;
const {Content} = Layout
class ContentHome extends PureComponent{
    render(){
        return (
            <Content>
                <LastHeader head="home"/>
                <Row>
                    <Col style={{backgroundColor:"gray"}} xs={{ span: 1 }} md={{span:1}} lg={{ span: 4 }}>
                    
                    </Col>
                    <Col style={{backgroundColor:"green"}} xs={{ span: 22 }} md={{span:22}} lg={{ span: 16 }}>
                        <div className="h1-text">
                            Sigue Los pasos ...
                        </div>
                        <Divider/>
                        <div>
                            <Steps size="small" responsive={true}>
                                <Step status="finish" title="Registrate" icon={<UserAddOutlined />} />
                                <Step status="finish" title="Encuentra Tu Empresa Favorita" icon={<SearchOutlined />} />
                                <Step status="finish" title="Pide Tu Producto" icon={<ShoppingCartOutlined />} />
                                <Step status="finish" title="Realiza El Pago" icon={<LoadingOutlined />} />
                                <Step status="finish" title="Listo!" icon={<SmileOutlined />} />
                            </Steps>
                        </div>
                    </Col>
                    <Col style={{backgroundColor:"red"}} xs={{ span: 1 }} md={{span:1}} lg={{ span: 4 }}>
                    Col
                    </Col>
                </Row>

            </Content>
        )
    };
}

export default ContentHome;