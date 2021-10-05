import React, { PureComponent } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';

import AñadirDireccionUSer from "./FormRegister/AñadirDireccionUser"

import { signUp } from '../../../actions/userActions';

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

class FormRegister extends PureComponent 
{
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit = async (values) => {
        const data = {
            "nombre_usuario": values.name,
            "apellido": values.lastname,
            "correo_usuario": values.email,
            "contrasena": values.password,
            "num_telefono_usuario": (values.prefix + values.phone),
            "num_cedula": values.id,
            "estado_usuario": "habilitado",
            "url_imagen_usuario": "",
            "fk_tipo_usuario": 2
        };
        this.setState({
            isLoading: true
        });
        const response = await signUp(data);
        this.setState({
            isLoading: false
        });
        if (response.errors) {
            response.errors.map((x) => {
                message.error(x.value + ": " + x.msg);  
            });
        }
        else if (response.message) {
            message.error(response.message);
        }
        else  {
            message.success("Gracias por registrarte!");
            setTimeout(() => {
                const { history } = this.props;
                history.push("/ingresar");
            }, 1500);
        }
    }
    
    render() {
//         const [form] = Form.useForm();
        
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select
                style={{
                    width: 70
                }}
                >
                <Option value="+58">+58</Option>
                </Select>
            </Form.Item>
        );

        return (
            <Form
                {...formItemLayout}
//                 form={form}
                layout='vertical'
                name="register"
                onFinish={this.handleSubmit}
                initialValues={{
                prefix: '+58'
                }}
                scrollToFirstError
            >
                <Form.Item
                name="name"
                label="Nombre"
                rules={[
                    {
                    required: true,
                    message: 'Por Favor diganos su Nombre'
                    }
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                name="lastname"
                label="Apellido"
                rules={[
                    {
                    required: true,
                    message: 'Por Favor diganos su Apellido'
                    }
                ]}
                >
                <Input />
                </Form.Item>

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
                name="id"
                label="cedula de identidad"
                rules={[
                    {
                    required: true,
                    message: 'Por Favor ingrese su numero de identificacion'
                    }
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                name="password"
                label="Contraseña"
                rules={[
                    {
                    required: true,
                    message: 'Por favor ingrese su contraseña!',
                    },
                ]}
                hasFeedback
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                name="confirm"
                label="Confirmar Contraseña"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: 'Por favor confirme su contraseña!',
                    },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }

                        return Promise.reject(new Error('Las dos contraseñas no coinciden!'));
                    },
                    }),
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item>
                <div style={{float:'left'}}>
                    <p>Direccion (Donde quieres recibir los productos)</p>
                </div>
                </Form.Item>
                
                <Form.Item>
                <div style={{float:"left", marginBottom:"2%"}}>
                    <AñadirDireccionUSer/>
                </div>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                    Registrarme
                    </Button>
                </Form.Item>
            </Form>
        );
    }
};

export default withRouter(FormRegister);
