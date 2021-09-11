import React, { PureComponent } from 'react';
import {Layout,Row,Col} from 'antd'
import userpic from '../../../assets/img/user-icon-image-13.jpg';

const {Content} = Layout;

class ContentLastHUser extends PureComponent{

	render(){
        return (
            <Content>
                <Row style={{background:'#EBF5FB'}}>
                    
                    <Col flex={1} >
                    <div style={{marginTop:'15px', textAlign:'center',justifyContent:'center',alignItems:'center'}}>
                        <img src={userpic} alt='' />
                    </div>
                    </Col>
                    <Col flex={4} >
                        <h1 style={
                                {fontSize:'40px',
                                fontWeight:'600',
                                marginLeft:'20px',
                                fontFamily:'Lato'
                                }
                            }>User
                        </h1>
                        <h2 style={
                                {fontSize:'20px',
                                fontWeight:'600',
                                marginLeft:'20px',
                                fontFamily:'Lato',
                                marginTop:'0px'
                                }
                            }>+0414-1234567
                        </h2>
                    </Col>
                </Row>
            </Content>
        );
	}
}

export default ContentLastHUser;