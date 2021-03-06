import React, { PureComponent } from 'react';
import { Radio, Row, Col } from 'antd';
import { createFromIconfontCN, DollarOutlined, EuroOutlined } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
      '////at.alicdn.com/t/font_2761503_80axg5tkvxg.js', // icon-paypal, icon-Master-Card, icon-icon_zhifuvisa
      '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    ],
  });
  
function PaidMethods() {
    const RadioEvent = (radio) =>{
        alert('seleccionado radio button '+radio.target.value);
    }
    return(
        <Radio.Group style={{width:'90%'}} defaultValue={1} size="small" name="online" onChange={RadioEvent}>
            <div className="steps-titles2">Online</div>
            <Row style={{marginBottom:'2%'}}>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={1}><IconFont className="steps-iconfont" type="icon-paypal" /></Radio>
                    <div className="steps-subtitles">Paypal</div>
                </Col>
                <Col xs={{ span:20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={2}><IconFont className="steps-iconfont" type="icon-Master-Card" /></Radio>
                    <div className="steps-subtitles">Master Card</div>
                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={3}><IconFont className="steps-iconfont" type="icon-icon_zhifuvisa" /></Radio>
                    <div className="steps-subtitles">Visa</div>
                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={4}><IconFont style={{marginTop:'9px'}} className="steps-iconfont2" type="icon-tuichu" /></Radio>
                    <div className="steps-subtitles">Transferencia Bancaria</div>
                </Col>
            </Row>

            <div className="steps-titles2">En la entrega</div>
            <Row style={{marginBottom:'4%', width:'100%'}}>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={5}><DollarOutlined className="steps-iconfont2"/></Radio>
                    <div className="steps-subtitles">Efectivo Bs (o Dolares)</div>
                </Col>
                <Col xs={{ span:20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    <Radio value={6}><EuroOutlined className="steps-iconfont2"/></Radio>
                    <div className="steps-subtitles">Efectivo Euros</div>
                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    {/* Colocar otro metodo de pago*/}
                </Col>
                <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                    {/* Colocar otro metodo de pago*/}
                </Col>
            </Row>
        </Radio.Group>
    );
}

class SecondContent extends PureComponent {

  render(){
    return (
        <div style={{width:'100%'}}> 
            <PaidMethods />
        </div>
    );
  }
}

export default SecondContent;
