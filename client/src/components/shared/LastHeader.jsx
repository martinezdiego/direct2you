import React, { PureComponent } from 'react';
import ContentLastHRegisterEmpresa from "./LastHeader/ContentLastHRegisterEmpresa"
import ContentLastHDefault from "./LastHeader/ContentLastHDefault"
import ContentLastHeaderHome from './LastHeader/ContentLastHeaderHome'

class LastHeader extends PureComponent{	

  render(){
		const prop = this.props.head;
		if (prop === 'RegisterEmpresa'){
			return (<ContentLastHRegisterEmpresa />);
		}
		else if (prop === 'default'){
			return (<ContentLastHDefault/>);
		}else if (prop === 'home'){
			return (<ContentLastHeaderHome />)
		}
	};
}
export default LastHeader;