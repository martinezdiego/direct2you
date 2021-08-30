import React, {PureComponent} from 'react';
import { Layout, Row, Col,Badge,Divider } from 'antd';
import { FileDoneOutlined, ShoppingCartOutlined, DollarOutlined, LikeOutlined } from '@ant-design/icons';
import RegistrationForm from './ContentRegistro/FormRegister'
import 'antd/dist/antd.css';
import '../../assets/css/Registro.css';
import '../../assets/css/Navfooter.css';

const { Content } = Layout;

class ContentRegistro extends PureComponent {
  render(){
    return(
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{textAlign:'center'}}>
          <h1 className="h1-reg">Registro</h1>
        </div>
        <div className="Col-left">

            <Divider>
              <FileDoneOutlined className="icon"/>
            </Divider>
            <Row>
              <Col flex={2}>
                <div style={{float:'right', marginRight:'10px',marginTop:'10px'}}>
                  <Badge count={1} style={{background:'green',color:'white',borderColor:'green'}} />
                </div>
              </Col>
              <Col flex={2}>
                <p className="p-left">Completa el formulario de registro</p>
              </Col>
            </Row>

          <Divider>
            <ShoppingCartOutlined className="icon"/>
          </Divider>
          <Row>
            <Col flex={2}>
              <div style={{float:'right', marginRight:'10px',marginTop:'10px'}}>
                <Badge count={2} style={{background:'green',color:'white',borderColor:'green'}} />
              </div>
            </Col>
            <Col flex={2}><p className="p-left">Escoge los productos que desees y has el pedido</p></Col>
          </Row>
          <Divider>
            <DollarOutlined className="icon"/>
          </Divider>
          <Row>
            <Col flex={2}>
              <div style={{float:'right', marginRight:'10px',marginTop:'10px'}}>
                <Badge count={3} style={{background:'green',color:'white',borderColor:'green'}} />
              </div>
            </Col>
            <Col flex={2}><p className="p-left">Realiza el pago de los productos</p></Col>
          </Row>
          <Divider>
            <LikeOutlined className="icon"/>
          </Divider>
          <Row>
            <Col flex={2}>
              <div style={{float:'right', marginRight:'10px',marginTop:'10px'}}>
                <Badge count={4} style={{background:'green',color:'white',borderColor:'green'}} />
              </div>
            </Col>
            <Col flex={2}><p className="p-left">Recibe el pedido</p></Col>
          </Row>
        </div>
        
        <div className="Col-right">
          <div style={{justifyContent:'center',textAlign:'center'}}>
            <RegistrationForm />
          </div>
        </div>
      </Content>
    );
  }
}

export default ContentRegistro;