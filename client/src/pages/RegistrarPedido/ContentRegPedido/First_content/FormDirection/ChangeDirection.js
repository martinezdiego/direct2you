import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const datos_dir = {
    calle:'Ave 2 calle 12',
    ciudad: 'Merida',
    edificio: '01',
    piso: 'apt 02',
    zona: 'los medanos',
    punto: '',
    cedula: '25123456'
}
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Cambiar Direccion"
      okText="Cambiar direccion"
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
          ciudad: datos_dir["ciudad"],
          calle: datos_dir["calle"],
          edif: datos_dir["edificio"],
          piso: datos_dir["piso"],
          zonares: datos_dir["zona"],
          id: datos_dir["cedula"]
        }}
      >
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
          <Input />
        </Form.Item>
        <Form.Item
          name="edif"
          label="Edificio/Casa"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="piso"
          label="Piso/Apartamento"
        >
          <Input />
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
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un nombre de calle!',
            },
          ]}
        >
            <Select placeholder="Los curos">
                <Option value="Merida">Merida</Option>
                <Option value="Plaza ejido">Plaza ejido</Option>
            </Select>
        </Form.Item>
        <Form.Item
        name="id"
        label="Cedula de Identidad"
        rules={[
          {
            required: true,
            message: 'Por Favor ingrese su numero de identificacion'
          }
        ]}
      >
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
          name="referencia"
          label="Punto de Referencia"
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ChangeDirection = () => {
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
        Cambiar Direccion
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

export default ChangeDirection;