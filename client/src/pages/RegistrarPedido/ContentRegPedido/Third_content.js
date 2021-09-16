import React, { PureComponent } from 'react';
import { Form, Input, Col, Row, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const datos = [
  {
	alias:'alias_dir',
	calle:'Av. 02',
	edif:'01',
	telefono:'4141234567',
	zona:'los curos',
	piso:'apt-01',
    ciudad:'Merida',
    ref:'al frente de los chinos'
  },
  {
    metodo_pago:'Efectivo'
  },
  {
    pedido:[
      {item:'hamburguesa',cantidad:'2',costo:'4'},
      {item:'pizza',cantidad:'1',costo:'6.5'},
      {item:'refresco',cantidad:'1',costo:'15'}
    ]
  }
]

const ViewFormDirection = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      name="register"
      onFinish={onFinish}
      initialValues={{
        alias:datos[0]["alias"],
        phone:datos[0]["telefono"],
        calle:datos[0]["calle"],
        zonares:datos[0]["zona"],
        edif:datos[0]["edif"],
        piso:datos[0]["piso"],
        ciudad:datos[0]["ciudad"],
        referencia:datos[0]["ref"]

      }}
      scrollToFirstError
    >
    <Row>
      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 4 }}>
        <Form.Item
            name="alias"
            label="Alias"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
            name="calle"
            label="Calle"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
            name="edif"
            label="Edificio/Casa"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
            name="piso"
            label="Piso/Apartamento"
        >
            <Input disabled />
        </Form.Item>
      </Col>

      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 4 }}>
        <Form.Item
            name="ciudad"
            label="Ciudad"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
          name="zonares"
          label="Zona Residencial"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
            name="phone"
            label="Numero de Telefono"
        >
            <Input disabled />
        </Form.Item>

        <Form.Item
          name="referencia"
          label="Punto de Referencia"
        >
          <Input disabled />
        </Form.Item>
      </Col>
      </Row>

    </Form>
  );
};

class Third_content extends PureComponent {
  constructor(props){
    super(props);
    this.state = {Subtotal:0};
  }
  render(){
    const listItems = datos[2]["pedido"].map((dato) => 
      <>
        <Row style={{width:'95%'}}>
          <Col xs={{span:5,}} lg={{span:3}}><div className="steps-subtitles2" style={{textAlign:'center'}}>{dato["cantidad"]}</div></Col>
          <Col xs={{span:14,}} lg={{span:18}}><div className="steps-subtitles2" style={{textAlign:'center'}}>{dato["item"]}</div></Col>
          <Col xs={{span:5,}} lg={{span:3}}><div className="steps-subtitles2" style={{textAlign:'center'}}>{dato["costo"]}</div></Col>             
        </Row>
      </>
    );
    
    datos[2]["pedido"].map( (dato)=> 
    <>
      {this.state.Subtotal = this.state.Subtotal+ parseFloat(dato["costo"])}
    </>
    );

    return (
        <div>
            <div style={{marginBottom:'3%'}}>
              <div className="steps-titles2">Direccion de Envio</div>
              <ViewFormDirection />
            </div>
            <div style={{width:'100%'}}>
              <Row >
                <Col xs={{span:24,}} lg={{span:10}}>
                  <div className="steps-titles2">Mi Pedido</div>
                  <Row style={{width:'95%'}}>
                    <Col xs={{span:6}} lg={{span:4}}>
                      <div className='titles-table'>Cantidad</div>
                    </Col>
                    <Col xs={{span:12}} lg={{span:16}}>
                      <div className='titles-table'>Producto</div>
                    </Col>
                    <Col xs={{span:6}} lg={{span:4}}>
                      <div className='titles-table'>Costo</div>
                    </Col>
                  </Row>
                  <Divider />{listItems}<Divider />
                  <div className="steps-subtitles2" style={{textAlign:'left',marginLeft:'5%'}}>Sub Total: {this.state.Subtotal}</div>
                </Col>

                <Col xs={{span:24}} lg={{span:10}}>
                  <div className="steps-titles2">Metodo de Pago</div>
                  <div style={{marginTop:'23px',marginBottom:'50px'}}>
                    <div className="titles-table">Usted Pagara Mediante: {datos[1]["metodo_pago"]}</div>
                  </div>
                </Col>
              </Row>
            </div>

        </div>
    );
  }
}

export default Third_content;
