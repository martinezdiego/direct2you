import React, {PureComponent} from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Content } = Layout;


class ForgetPassword extends PureComponent {
    render(){
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
            window.location.href = "/forgotok";
        };
        return (
            <Content style={{ padding: '0 50px', marginTop: 120 , marginBottom:120}}>
            <div>
                <h1 style={{textAlign:'center',fontSize:'20px',fontWeight:'bold'}}> Recuperar contraseña </h1>
            </div>
            <div>
                <Form
                    name="normal_login"
                    layout="vertical"
                    className="login-form"
                    onFinish={onFinish}                    
                >
                    <Form.Item
                        className="login-form"
                        layout = 'vertical'
                        //text-align = 'center'
                        label="Correo Electronico"
                        //labelAlign = 'right'
                        name="correo electronico" 
                        rules={[{ required: true, message: 'Por favor ingrese su correo electronico!' },
                                    {type:"email", message: 'Por favor ingrese un Correo valido'},
                        ]}    
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="correo electronico"/>
                    </Form.Item>

                    <Form.Item >
                        <Button type = 'primary' htmlType='submit' className = 'forget-form-button'>
                            Reiniciar
                        </Button>
                        <Form.Item >
                            ¿Aun no tienes una cuenta? | <a href="/registrarse">Registrate Ahora!</a>
                            <br/>
                            ¿Recordaste la contraseña? | <a href="/ingresar">Ingresar</a>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </div>
            </Content>
        )
    }
}

export default ForgetPassword;