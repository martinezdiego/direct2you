import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/shared/Navbar';
import NavFooter from '../components/shared/footer';
import ShoppingContent from './Shopping/ShoppingContent';


class Shopping extends PureComponent {

    constructor(props){
        super(props);
    
        this.state = {
            data : [
                {id : 0, productName:'Pizza', Description:'La mejor pizza'},
                {id : 1, productName:'Burger', Description:'Hamburguesa con todo'},
                {id : 2, productName:'Salad', Description:'Caesar salad'},
                {id : 3, productName:'Sushi', Description:'Best Sushi ever'},
                {id : 4, productName:'Hot Dog', Description:'Hot dog'},
                {id : 5, productName:'Bread', Description:'Bread with chesse'}
            ],
            shopping_cart: []
        };
    }

    render(){
        return (
        <>
            <Layout>
            <ShoppingContent data = {this.state.data} cart = {this.state.shopping_cart}/>
            <NavFooter />
            </Layout>
        </>
        );
    }
}

export default Shopping;