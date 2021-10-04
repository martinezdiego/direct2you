import React, {PureComponent} from 'react';
import {Layout} from 'antd'
import LastHeader from '../../components/shared/LastHeader';
import FormUpdate from './ContentPerfilUser/FormUpdate';

const {Content} = Layout;

class ContentPerfilUser extends PureComponent{
	render(){

	return(
		<Content>
			<LastHeader head="user"/>
			<div style={{textAlign:'center',margin:'30px',fontSize:'30px',fontWeight:'800'}}> Mi Perfil</div>				
			<FormUpdate />
		</Content>
		);
	}
}

export default ContentPerfilUser;