import React, {PureComponent} from 'react';
import { Button, Layout } from 'antd';

const { Content } = Layout;


class ForgetOk extends PureComponent {
    render(){
        return (
            <Content style={{ padding: '0 50px', marginTop: 120 , marginBottom:120}}>
            <div>
                <h1 style={{textAlign:'center',fontSize:'20px',fontWeight:'bold'}}> Reiniciar contraseña </h1>
            </div>
            <div style = {{lineHeight:'5px', textAlign:'center'}}>
                <p style={{textAlign:'center',fontSize:'15px', display:'block'}}> 
                    Hemos enviado una nueva contraseña a tu correo electronico. Te 
                </p>
                <p style={{textAlign:'center',fontSize:'15px', display:'block'}}>
                    recomendamos entrar a tu cuenta y cambiarla por una de tu preferencia.
                </p>
                <Button type = 'primary' className = 'forget-form-button' href = '/ingresar' style = {{'width':'200px'}}>
                    Ingresar
                </Button>
            </div>
            </Content>
        )
    }
}

export default ForgetOk;