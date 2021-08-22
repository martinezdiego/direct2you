import React from 'react';
import ContentLastHRegisterEmpresa from "./ContentLastHRegisterEmpresa"
import ContentLastHDefault from "./ContentLastHDefault"

class LastHeader extends React.Component{	

  render(){
		const prop = this.props.head;
		if (prop === 'RegisterEmpresa'){
			return (<ContentLastHRegisterEmpresa />);
		}
		else if (prop === 'default'){
			return (<ContentLastHDefault/>);
		}
	}
}
export default LastHeader;