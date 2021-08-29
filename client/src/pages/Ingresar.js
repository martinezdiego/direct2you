import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import IngresarForm from './ingresar/IngresarForm';

const { Content } = Layout;

class Ingresar extends PureComponent 
{
  render() {
    return (
        <Content className="ingresar-content">
            <IngresarForm />
        </Content>
    );
  }
}

export default withRouter(Ingresar);
