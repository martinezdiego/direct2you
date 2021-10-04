import React from 'react';
import { Form, Input, Select, Button, Col, Row } from 'antd';
import UpdateDireccion from './FormUpdate/UpdateDireccion';
const { Option } = Select;

const FormUpdate = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="58">+58</Option>
        {/*<Option value="87">+87</Option>*/}
      </Select>
    </Form.Item>
);
const datos = {
	nombre:'User',
	apellido:'apellido user',
	email:'user@gmail.com',
	telefono:'4141234567',
	cedula:'25123456',
	contraseña:'password_user'
}

  return (
    <Form
      form={form}
      layout='vertical'
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '58',
        name:datos["nombre"],
        phone:datos["telefono"],
        lastname:datos["apellido"],
        id:datos["cedula"],
        email:datos["email"],
        password:datos["contraseña"]
      }}
      scrollToFirstError
    >
    <Row>
      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <Form.Item
            name="name"
            label="Nombre"
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="phone"
            label="Numero de Telefono"
        >
            <Input
            addonBefore={prefixSelector}
            style={{
                width: '100%'
            }}
            />
        </Form.Item>
      </Col>

      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Form.Item
            name="lastname"
            label="Apellido"
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="id"
            label="cedula de identidad"
        >
            <Input disabled={true}/>
        </Form.Item>
      </Col>

      <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <Form.Item
            name="email"
            label="Correo Electronico"
        >
            <Input defaultValue={datos["email"]}/>
        </Form.Item>

        <Form.Item
            name="password"
            label="Contraseña"
            hasFeedback
        >
            <Input.Password />
        </Form.Item>
      </Col>
      </Row>

      <Form.Item>
        <div style={{marginLeft:'4.3%',marginTop:'2%'}}>
          <p>Direccion (Donde quieres recibir los productos)</p>
        </div>
      </Form.Item>
     
      <Form.Item>
        <div style={{marginLeft:'4.3%', marginBottom:"2%"}}>
          <UpdateDireccion/>
        </div>
      </Form.Item>
      <Form.Item>
          <div style={{textAlign:'center',marginBottom:'5%'}}>
          <Button style={{borderRadius:'50px'}} type="primary" htmlType="submit">
            Actualizar
          </Button>
          </div>
      </Form.Item>
    </Form>
  );
};

export default FormUpdate;