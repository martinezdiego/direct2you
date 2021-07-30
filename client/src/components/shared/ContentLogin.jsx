import React from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../assets/css/form.css';
import 'antd/dist/antd.css';
import '../../assets/css/Navfooter.css';
{/*
import userpic from '../../assets/img/user-icon-image-13.jpg';
*/}

const { Content } = Layout;

function ContentLogin(props) {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return(
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ padding: 24, textAlign: 'center' }}>
        <h1 style={{textAlign:'center',fontSize:'20px',fontWeight:'bold'}}>Ingresar</h1>
      </div>
      <div>
        <Form
        name="normal_login"
        layout='vertical'
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
            label="Correo Electronico"
            name="correo electronico"
            rules={[{ required: true, message: 'Por favor ingrese su correo electronico!' }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="correo electronico" />
        </Form.Item>
        <Form.Item
            label="Contraseña"
            name="contraseña"
            rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="contraseña"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="login-form-remember">Remember me</Checkbox>
            </Form.Item>
            {/*
            <a className="login-form-forgot" href="">
            Forgot password
            </a>
            */}
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
            <div style={{textAlign:'center'}}>
              <Form.Item >
                ¿Aun no tienes una cuenta? | <a href="">Registrate Ahora!</a>
                <br/>
                <a href="#Ir pagina recuperar contra">¿Olvidaste la contraseña?</a>
              </Form.Item>
            </div>
        </Form.Item>
        </Form>
      </div>
    </Content>
  );
}

export default ContentLogin;