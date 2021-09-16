import React from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import ChangeDirection from './FormDirection/ChangeDirection';

const FormDirection = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

const datos = {
	alias:'alias_dir',
	calle:'Av. 02',
	edif:'01',
	telefono:'4141234567',
	zona:'los curos',
	piso:'apt-01',
    ciudad:'Merida',
    ref:'al frente de los chinos'
}

  return (
    <Form
      form={form}
      layout='vertical'
      name="register"
      onFinish={onFinish}
      initialValues={{
        alias:datos["alias"],
        phone:datos["telefono"],
        calle:datos["calle"],
        zonares:datos["zona"],
        edif:datos["edif"],
        piso:datos["piso"],
        ciudad:datos["ciudad"],
        referencia:datos["ref"]

      }}
      scrollToFirstError
    >
    <Form.Item>
        <div style={{float:'left', marginLeft:'4%' ,marginBottom:"2%"}}>
            <ChangeDirection />
        </div>
    </Form.Item>

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

      <Form.Item>
          <div style={{textAlign:'center',marginBottom:'5%',marginTop:'3%'}}>
          <Button style={{borderRadius:'50px'}} type="primary" htmlType="submit">
            Confirmar Direccion
          </Button>
          </div>
      </Form.Item>
    </Form>
  );
};

export default FormDirection;