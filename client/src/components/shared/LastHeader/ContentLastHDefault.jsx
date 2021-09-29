import React, { PureComponent } from 'react';
import {Layout} from 'antd'

const {Content} = Layout;

class ContentLastDefault extends PureComponent{

	render(){
			return (
				<Content className="LHDefault-container">
					<div className="LHDefaultcontainerMask">
						<div >
							<h1 className="LHDefault-h1-text">Con Direct2You tus productos llegan directo a casa!</h1>
							<h2 className="LHDefault-h2-text">Mercado, Restaurante, reposteria, productos del hogar, farmacia y mas...</h2>
						</div>
					</div>
				</Content>
			);
	}
}

export default ContentLastDefault;