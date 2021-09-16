import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Steps, Button, message } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import First_content from './ContentRegPedido/First_content'
import Second_content from './ContentRegPedido/Second_content';
import Third_content from './ContentRegPedido/Third_content';


const { Content } = Layout;
const { Step } = Steps;

const steps = [
  {
    title: <div className="steps-titles">Direccion de Entrega</div>,
    content: <First_content />,
  },
  {
    title: <div className="steps-titles">Forma de Pago</div>,
    content: <Second_content />,
  },
  {
    title: <div className="steps-titles">Confirmar</div>,
    content: <Third_content />,
  },
];

const BodyRegistro = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
          {current > 0 && (
              <Button icon={<DoubleLeftOutlined />} style={{marginRight:'10px'}} onClick={() => prev()}>
                Volver
              </Button>
            
          )}
          {current < steps.length - 1 && (
            
              <Button icon={<DoubleRightOutlined />} type="primary" onClick={() => next()}>
                Continuar
              </Button>
            
          )}
          {current === steps.length - 1 && (
              <Button style={{background:'green',borderColor:'green'}} type="primary" onClick={() => message.success('Processing complete!')}>
                Confirmar
              </Button>
          )}
      </div>
    </>
  );
};

class ContentRegPedido extends PureComponent {
  render(){
    return(
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <BodyRegistro />
        </div>
      </Content>
    )
  };
}

export default ContentRegPedido;