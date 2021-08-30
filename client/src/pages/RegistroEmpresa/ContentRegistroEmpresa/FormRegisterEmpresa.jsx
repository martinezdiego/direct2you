import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import FormAñadirDireccion from './FormRegisterEmpresa/FormAñadirDireccion';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 22,
    },
    xxl:{
      span:16
    }
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 22,
      offset: 0,
    },
    xxl:{
      span:16,
      offset:0
    }
  },
};

const FormRegisterEmpresa = () => {
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
  return (
    <Form
      {...formItemLayout}
      form={form}
      layout='vertical'
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '58'
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Nombre de la Empresa"
        rules={[
          {
            required: true,
            message: 'Por Favor diganos el Nombre de la compañia'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <div style={{textAlign:"left"}}>
        <Form.Item
            name="Category"
            label="Categoria"
            hasFeedback
            rules={[{ required: true, message: 'Por favor ingrese la categria!' }]}
        >
            <Select placeholder="Seleccione la categoria de su empresa">
            <Option value="Restaurante">Restaurante</Option>
            <Option value="Bebidas">Bebidas</Option>
            <Option value="Otros">Otros</Option>
            </Select>
        </Form.Item>
      </div>

      <Form.Item
        name="email"
        label="Correo Electronico"
        rules={[
          {
            type: 'email',
            message: 'El correo ingresado no es valido!',
          },
          {
            required: true,
            message: 'Por favor ingrese su correo!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Numero de Telefono: "
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su numero telefonico!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%'
          }}
        />
      </Form.Item>

      <Form.Item
        name="rif"
        label="RIF"
        rules={[
          {
            required: true,
            message: 'Por Favor ingrese su numero de registro RIF'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <div style={{float:'left'}}>
          <p>Direccion (Donde buscaremos los productos)</p>
        </div>
      </Form.Item>
     
      <Form.Item>
        <div style={{float:"left", marginBottom:"2%"}}>
          <FormAñadirDireccion/>
        </div>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
      </Form.Item>
    </Form>
  );
};

export default FormRegisterEmpresa;