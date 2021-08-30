import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Agregar Direccion de Empresa"
      okText="Agregar direccion"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_add_direction"
        initialValues={{
          ciudad: 'Merida',
        }}
      >
        <Form.Item
          name="alias"
          label="Alias"
        >
          <Input placeholder="Dir D2Y"/>
        </Form.Item>
        <Form.Item
          name="calle"
          label="Calle"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un nombre de calle!',
            },
          ]}
        >
          <Input placeholder="Avenida 2"/>
        </Form.Item>
        <Form.Item
          name="edif"
          label="Edificio/Casa"
        >
          <Input placeholder="01"/>
        </Form.Item>
        <Form.Item
          name="piso"
          label="Piso/Apartamento"
        >
          <Input placeholder="Apto 01-06"/>
        </Form.Item>
        <Form.Item
          name="ciudad"
          label="Ciudad"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un nombre de calle!',
            },
          ]}
        >
            <Select >
                <Option value="Merida">Merida</Option>
                <Option value="Trujillo">Trujillo</Option>
            </Select>
        </Form.Item>
        <Form.Item
          name="zonares"
          label="Zona Residencial"
        >
            <Select placeholder="Los curos">
                <Option value="Merida">Merida</Option>
                <Option value="Plaza ejido">Plaza ejido</Option>
            </Select>
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
      <Form.Item
          name="referencia"
          label="Punto de Referencia"
        >
          <Input placeholder="Frente la plaza bolivar"/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const FormAñadirDireccion = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form direction: ', values);
    setVisible(false);
  };

  return (
    <div>  
      <Button
        type="dashed"
        size = "small"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Agregar Direccion
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default FormAñadirDireccion;