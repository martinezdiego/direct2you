import React from 'react';
import {Layout} from 'antd'

const {Content} = Layout;

class ContentLastDefault extends React.Component{

	render(){
			return (
				<Content>
					<div style={{textAlign:"center"}}>
						<h2 style={{fontSize:'40px'}}>Con Direct2You tus productos llegan directo a casa!</h2>
						<h3 style={{fontSize:'15px', marginTop:'0px'}}>Mercado, Restaurante, reposteria, productos del hogar, farmacia y mas...</h3>
					</div>
				</Content>
			);
	}
}

export default ContentLastDefault;