import React, { PureComponent } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class IngresarForm extends PureComponent 
{
  onFinish(values) {
    console.log('Received values of form: ', values);
  }

  render() {
    return (
        <Form
            className="ingresar-form"
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
        >
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Ingrese su correo',
            },
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="correo@ejemplo.com" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Ingrese su contrasena',
            },
            ]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="contrasena"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recordarme</Checkbox>
            </Form.Item>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="ingresar-form-submit-button">
                Ingresar
            </Button>
            <a href="#">Registrarse</a>
            <a className="ingresar-form-forgot" href="#">
                Recuperar contraseña
            </a>
        </Form.Item>
        </Form>
    );
  }
}

export default IngresarForm;
