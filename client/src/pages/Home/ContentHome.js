import React, { PureComponent } from 'react';
import {Layout, Col, Row, Divider, Steps} from 'antd'
import { UserAddOutlined, 
    SmileOutlined, 
    LoadingOutlined, 
    SearchOutlined, 
    ShoppingCartOutlined, 
    ExclamationOutlined,
    QuestionOutlined } from '@ant-design/icons';

import LastHeader from '../../components/shared/LastHeader'

const { Step } = Steps;
const {Content} = Layout
const titleE = (
    <div className="title-step">
    Encuentra Tu Empresa Favorita
    </div>
);
const titleR = (
    <div className="title-step">
    <a href="/registrarse" >Registrate</a>
    </div>
);
const titleP = (
    <div className="title-step">
    <p>Pide Tu Producto</p>
    </div>
);
const titleRP = (
    <div className="title-step">
    <p>Realiza EL Pago</p>
    </div>
);
const titledone = (
    <div className="title-step">
    <p>Listo<ExclamationOutlined /></p>
    </div>
);
class ContentHome extends PureComponent{
    render(){
        return (
            <Content>
                <LastHeader head="home"/>
                <div style={{marginTop:'5%'}}>
                    <Row>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                        <Col lg={{ span: 20 }}  xs={{ span: 24 }}>
                            <h2 style={{fontWeight:'600',fontSize:'20px',float:'left',fontFamily:'Lato'}}>
                                Sigue Los pasos ...
                            </h2 >
                            <Divider/>
                            <div>
                                <Steps size="small" responsive={true}>
                                    <Step status="finish" title={titleR} icon={<UserAddOutlined />} />
                                    <Step status="finish" description={titleE} icon={<SearchOutlined />} />
                                    <Step status="finish" title={titleP} icon={<ShoppingCartOutlined />} />
                                    <Step status="finish" title={titleRP} icon={<LoadingOutlined />} />
                                    <Step status="finish" title={titledone} icon={<SmileOutlined />} />
                                </Steps>
                            </div>
                        </Col>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                    </Row>
                </div>
                <div style={{marginTop:'5%'}}>
                    <Row>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                        <Col lg={{ span: 20 }}  xs={{ span: 24 }}>
                            <h2 style={{fontWeight:'600',fontSize:'20px',float:'left',fontFamily:'Lato'}}>
                                Que Ofrecemos<ExclamationOutlined />
                            </h2 >
                            <Divider/>
                            <div>
                            <p className="p-label">
                                Con DIRECT2YOU obtienes lo que se te antoje a la puerta de tu casa 
                                o en el lugar donde te encuentres, solo debes realizar los pasos rapidos 
                                y sencillos desde tu computadora, telefono o tablet. Pide tus productos 
                                preferidos a la empresa que mas te guste con la total confianza de no perder
                                tu dinero bajo nuestra seguridad. Pidelo al instante y recibelo al instante
                                con DIRECT2YOU.
                            </p>
                            </div>
                        </Col>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                    </Row>
                </div>
                <div style={{marginTop:'5%',marginBottom:'3%'}}>
                    <Row>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                        <Col lg={{ span: 20 }}  xs={{ span: 24 }}>
                            <h2 style={{fontWeight:'600',fontSize:'20px',float:'left',fontFamily:'Lato'}}>
                                Necesitas Ayuda<QuestionOutlined />
                            </h2 >
                            <Divider/>
                            <div>
                            <p className="p-label">
                                ¿Tienes una empresa? , ¿necesitas expandirte y ofertar tus productos?. Tranquilo,
                                DIRECT2YOU llega a ti para hacertelo mas simple. Solo <a href="/registrar-empresa">Registrate</a>, 
                                dinos tus productos y listo !!!... Nosotros haremos el resto, <a href="/registrar-empresa">Registrate Ahora!</a> en DIRECT2YOU.
                            </p>
                            </div>
                        </Col>
                        <Col lg={{ span: 2 }}  xs={{ span: 0 }}/>
                    </Row>
                </div>
            </Content>
        )
    };
}

export default ContentHome;