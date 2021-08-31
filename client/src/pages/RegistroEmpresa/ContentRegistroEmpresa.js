import React, { PureComponent } from 'react';
import { Layout, Row, Col,Divider } from 'antd';
import {CheckSquareFilled, FormOutlined, ContainerOutlined, CarFilled, LikeFilled} from "@ant-design/icons";
import LastHeader from '../../components/shared/LastHeader';
import FormRegisterEmpresa from './ContentRegistroEmpresa/FormRegisterEmpresa'

const { Content } = Layout;

class ContentRegistroEmpresa extends PureComponent {
	render(){
		return(
			<Layout>
				<LastHeader head="RegisterEmpresa" /> {/* parametro para mostrar last header de registro de empresa*/ }
				<Content style={{marginTop:'3%'}}>
					<div>
						<h1 style={{float:'left',fontWeight:'bold',fontSize:'20px', color:'black'}}>
							Disfruta de los beneficios de ser nuestro aliado:
						</h1>
					</div>
					<Divider/>
					<div className="Col-left">
						<Row>
							<Col sm={{span:'2'}} xs={{span:'1'}}>
								<CheckSquareFilled style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
							</Col>
							<Col sm={{span:'22'}} xs={{span:'18'}}>
								<p className="p-left2">Tus ventas creceran gracias a la publicidad que nosotros mismos
								hacemos sobre nuestros aliados y sus productos.
								</p>
							</Col>
						</Row>
						<Row>
							<Col sm={{span:'2'}} xs={{span:'1'}}>
								<CheckSquareFilled style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
							</Col>
							<Col sm={{span:'22'}} xs={{span:'18'}}>
								<p className="p-left2">Aumenta la visibilidad de tu negocio y llega a nuevos clientes.
								</p>
							</Col>
						</Row>
						<Row>
							<Col sm={{span:'2'}} xs={{span:'1'}}>
								<CheckSquareFilled style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
							</Col>
							<Col sm={{span:'22'}} xs={{span:'18'}}>
								<p className="p-left2">Podras ofrecer un servicio de entrega a domicilio sin tener
								que preocuparte por los envios.
								</p>
							</Col>
						</Row>
						<Divider/>
						<h1 style={{float:'left',fontWeight:'bold',fontSize:'18px', color:'black'}}>
							Una vez que seas nuestro aliado:
						</h1>
						<Divider/>
						<div style={{marginLeft:'4%'}}>
							<Row>
								<Col sm={{span:'2'}} xs={{span:'1'}}>
									<FormOutlined style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
								</Col>
								<Col sm={{span:'22'}} xs={{span:'18'}}>
									<p className="p-left2_1">El cliente pide tus productos desde nuestra web y te hace el pago.
									</p>
								</Col>
							</Row>
							<Row>
								<Col sm={{span:'2'}} xs={{span:'1'}}>
									<ContainerOutlined style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
								</Col>
								<Col sm={{span:'22'}} xs={{span:'18'}}>
									<p className="p-left2_1">Recibes el pedido a traves del numero de telefono que nos proporcionaste
									y lo preparas para entregarselo al repartidor.
									</p>
								</Col>
							</Row>
							<Row>
								<Col sm={{span:'2'}} xs={{span:'1'}}>
									<CarFilled style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
								</Col>
								<Col sm={{span:'22'}} xs={{span:'18'}}>
									<p className="p-left2_1">El repartidor retira el producto de tu tienda o local y lo entrega al cliente.
									</p>
								</Col>
							</Row>
							<Row>
								<Col sm={{span:'2'}} xs={{span:'1'}}>
									<LikeFilled style={{marginTop:'10px',marginBottom:'10px',fontSize:'20px'}} />
								</Col>
								<Col sm={{span:'22'}} xs={{span:'18'}}>
									<p className="p-left2_1">El cliente recibe el pedido.
									</p>
								</Col>
							</Row>
						</div>
					</div>
					<div className="Col-right">
						<div style={{textAlign:'center',justifyContent:'center'}}>
							<FormRegisterEmpresa />
						</div>
					</div>
				</Content>
			</Layout>
		);
	}
}

export default ContentRegistroEmpresa;