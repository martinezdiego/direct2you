import React from 'react';
import {Steps, Layout} from 'antd'
import { FileDoneOutlined, CheckOutlined, LikeOutlined } from '@ant-design/icons';
import '../../../assets/css/LastHeader.css';

const {Content} = Layout;
const { Step } = Steps;

class ContentLastRegisterEmpresa extends React.Component{

	render(){
			return (
				<Content>
					<div className="ContainerHead">
						<div >
						<h2>¿Quieres enviar tus productos con nuestro servicio de delivery?</h2>
						<br/>
						<h3>Solo tienes que seguir estos pasos:</h3>
						</div>
						<Steps size="small" current={1}>
						<Step 
								status="finish" 
								title="Completa el Formulario" 
								description="Completa el formulario de registro para empresas" 
								icon={<FileDoneOutlined />} 
						/>
						<Step 
								status="finish" 
								title="Verificacion" 
								description="Revisaremos tu solicitud y te pediremos que nos envie una lista de los productos que quieres vender"
								icon={<CheckOutlined />} 
						/>
						<Step 
								status="process" 
								title="Listo"
								description="Una vez que publiquemos tus productos en nuestra web ¡Ya estaras listo para vender!"
								icon={<LikeOutlined />}
						/>
						</Steps>
						</div>
				</Content>
			);
	}
}

export default ContentLastRegisterEmpresa;