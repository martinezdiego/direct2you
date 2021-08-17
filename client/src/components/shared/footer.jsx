import React from 'react';
import { Layout, Row, Col, Image,Button, Space } from 'antd';
import 'antd/dist/antd.css';
import logo from '../../assets/img/logoDirect2You.jpg';
import { FacebookOutlined,InstagramOutlined,WhatsAppOutlined } from '@ant-design/icons';
import '../../assets/css/Navfooter.css';

const { Footer } = Layout;

function NavFooter(props) {
    return(
        <Footer style={{background:"#ffffff"}}>
            <div className="Container">
                <Row className="Row">
                    <Col className="Column" >
                        <div style={{textAlign:'center'}}>
                            <Image
                                width={150}
                                preview={false}
                                src={logo}
                            />
                        </div>
                    </Col>
                    <Col className="Column" >
                        <div className="Heading">Contacto</div>
                        <div>contac@direct2you.com</div>
                        <div>+58 0412-1234567</div>
                    </Col>
                    <Col className="Column" >
                        <div className="Heading">Direccion</div>
                        <div>Calle #, entre avenidas # y # Local #</div>
                    </Col>
                    <Col className="Column" >
                        <div className="Heading">Encuentranos en</div>
                        <div style={{textAlign:'center'}}>
                            <Space>
                                <Button className="ButtonFooter" shape="circle" href="www.instagram.com/direct2you" icon={<InstagramOutlined />} />
                                <Button className="ButtonFooter" shape="circle" href="www.facebook.com/direct2you" icon={<FacebookOutlined />} />
                                <Button className="ButtonFooter" shape="circle" href="@direct2you" icon={<WhatsAppOutlined />} />
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
        </Footer>
    );
}

export default NavFooter;