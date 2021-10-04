import React, { PureComponent } from 'react';
import { Form, Input, Button, Checkbox, Layout, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions/sessionActions';

const { Content } = Layout;

class ContentLogin extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        const { history, session } = this.props;
        const { isAuthenticated } = session;
        if (isAuthenticated) {
            history.push("/dashboard");
        }
    }
    
    componentDidUpdate(prevProps) {
        const prevSession = prevProps.session;
        const { history, session } = this.props;
        if (session.isAuthenticated) {
            setTimeout(() => {
                history.push("/dashboard");
            }, 1500);
        }
        if (prevSession.error != session.error) {
            if (session.error.length && this.state.isLoading) {
                message.error(session.error);
                this.setState({
                    isLoading: false
                });
            }
        }
    }
  
    handleSubmit = (values) => {
        const { signin } = this.props;
        this.setState({
            isLoading: true
        });
        signin({
            'correo_usuario': values.email,
            'contrasena': values.password
        });
    }
    
    render(){
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
                onFinish={this.handleSubmit}
                >
                <Form.Item
                    label="Correo"
                    name="email"
                    rules={[{ required: true, message: 'Por favor ingrese su correo electronico!' },
                            {type:"email", message: 'Por favor ingrese un correo válido'}
                ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="" />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                    { required: true, message: 'Por favor ingrese su contraseña!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder=""
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="login-form-remember">Recordarme</Checkbox>
                    </Form.Item>
                    {/*
                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                    */}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.isLoading}>
                    Continuar
                    </Button>
                    <div style={{textAlign:'center'}}>
                    <Form.Item >
                        ¿Aun no tienes una cuenta? | <a href="/registrarse">Registrate Ahora!</a>
                        <br/>
                        <a href="/forgot">¿Olvidaste la contraseña?</a>
                    </Form.Item>
                    </div>
                </Form.Item>
                </Form>
            </div>
            </Content>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        session: state.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (data) => login(data)(dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentLogin));
