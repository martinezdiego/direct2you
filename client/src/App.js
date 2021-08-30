import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { withRouter } from 'react-router';

// import Ingresar from './pages/Ingresar';
import Registro from './pages/Registro';
import login from './pages/Login'

import 'antd/dist/antd.css';
import './assets/css/index.css';

class App extends PureComponent 
{
    componentDidMount() {
        const { history, location } = this.props;
        const { pathname } = location;
        if (pathname === '/') {
            history.push('/ingresar');
        }
    }

    render() {
        return (
            <Layout className="app-layout">
                <Switch>
                    <Route path="/ingresar" component={login} />
                    <Route path="/registrarse" component={Registro} />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
