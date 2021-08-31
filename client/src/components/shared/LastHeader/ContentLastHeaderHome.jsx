import React from 'react';
import {Layout} from 'antd'
import '../../../assets/css/home.css';
import FormHome from './ContentLastHeaderHome/FormHome'
const {Content} = Layout;

class ContentLastHome extends React.Component{

	render(){
			return (
				<div>
                    <div className="containerImage">
                        <div className="containerMask">
                            <div className="containerform1">
                                <div style={{marginBottom:'95px'}}>
                                    <h1 className="h1-text">Con Direct2You tus productos llegan directo a casa!</h1>
                                    <h2 className="h2-text">Mercado, Restaurante, reposteria, productos del hogar, farmacia y mas...</h2>
                                </div>
                                <FormHome />
                            </div>
                        </div>
                    </div>
				</div>
			);
	}
}

export default ContentLastHome;