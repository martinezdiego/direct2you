import React, { PureComponent } from 'react';
import ContentLastHRegisterEmpresa from "./LastHeader/ContentLastHRegisterEmpresa"
import ContentLastHDefault from "./LastHeader/ContentLastHDefault"
import ContentLastHeaderHome from './LastHeader/ContentLastHeaderHome'
import ContentLastHUser from './LastHeader/ContentLastHUser';

class LastHeader extends PureComponent{	

  render(){
		const prop = this.props.head;
		if (prop === 'RegisterEmpresa'){
			return (<ContentLastHRegisterEmpresa />);
		}else if (prop === 'home'){
			return (<ContentLastHeaderHome />);
		}else if (prop === 'user'){
			return (<ContentLastHUser />);
		}else{
			return (<ContentLastHDefault/>);
		}
	}
}
export default LastHeader;