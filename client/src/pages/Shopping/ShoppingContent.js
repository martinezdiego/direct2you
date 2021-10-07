import React, {PureComponent} from 'react';
import {Layout, Col, Row} from 'antd';
import ShoppingElement from './ShoppingItem/ShoppingElement'
import CartItem from './CartItem/CartItem'
import '../../assets/css/ShoppingCart.css'


const { Content } = Layout;

class ShoppingContent extends PureComponent {

    constructor(props){
        super(props);
    
        this.state = {
            data : props.data,
            // data : [
            //     {id : 0, productName:'Pizza', Description:'La mejor pizza'},
            //     {id : 1, productName:'Burger', Description:'Hamburguesa con todo'}
            // ],
            number : 0,
            shopping_cart : props.cart
            // shopping_cart: []
        };
    }

    shouldComponentUpdate() {
        return true;
    }

    //---------------------------- Add Items Function ------------------------//
    AddItems = item => {
        const {shopping_cart} = this.state;

        //let newItem = item
        let itemInCart = this.state.shopping_cart.find((item_cart) => item_cart.id === item.id);
        
        if (itemInCart) 
        {
            //const { shopping_cart } = this.state;
            console.log('Elemento ya esta en el carrito')
            for (var i = 0; i < shopping_cart.length; i++) 
            {
                if (shopping_cart[i].id === item.id)
                {
                    shopping_cart[i].count = shopping_cart[i].count + item.count;
                }
            }
            //this.setState(shopping_cart)
        }

        else 
        { 
            //const { shopping_cart } = this.state;
            console.log('Elemento no esta en el carrito')
            shopping_cart.push(item) 
            //this.setState(shopping_cart)
        }

        this.setState(shopping_cart)
        //this.setState(prev =>(this.state.shopping_cart : shopping_cart_new))
    }
    //------------------------------------------------------------------------//


    // ------------------------------ Del From Cart --------------------------//
    DelFromCart = item => {
        const {shopping_cart} = this.state;
        console.log('Entro aqui')
        
        for (var i = 0; i < shopping_cart.length; i++) 
        {
          if (shopping_cart[i].id === item.id)
          {
              shopping_cart.splice(i,1)
          }
         }
        
        console.log(shopping_cart)
        this.setState(shopping_cart)
    }
    //------------------------------------------------------------------------//


    //------------------------------- Shopping list --------------------------//
    ShoppingList = () => {
        return (
        <ul>
            {this.state.shopping_cart.map((item) => <li key = {item.id}> <CartItem name = {item.name} count = {item.count} id = {item.id} onDelFromCart = {this.DelFromCart} /> </li>)}
        </ul>
        )
    }
    //------------------------------------------------------------------------//





    render(){   
        return (
            <Content>
                <div style = {{height:'250px'}}>
                    <picture>
                        <source type="image/webp" srcset='https://images.deliveryhero.io/image/pedidosya/header-backgrounds/mobile/burger-3.jpg?quality=70&width=1280&webp=1&dpi=1.5' height= '250px' width='100%'></source>
                        <img src = 'https://images.deliveryhero.io/image/pedidosya/header-backgrounds/mobile/burger-3.jpg?quality=70&width=1280'></img>
                    </picture>
                    <div>
                        <p> Here </p>
                    </div>
                    {/* <picture>
                        <source srcset="./food.jpg">
                        <img srcset="./food.jpg">
                    </picture>
                     */}
                </div>
                <div style = {{width:'100%', height:'450px', display:'inline-block'}}>
                    <div style = {{width:'20%', backgroundColor:'#A0C', float:'left',height:'450px'}}>
                        <h3> Categorias </h3>
                    </div>
                    <div style = {{width:'60%', backgroundColor:'#FFF', float:'left', align:'center', height:'450px' }}>
                            
                        {/* <Row gutter={[12, 12]} style={{backgroundColor:'#000'}}>
                            <Col span={12}/>
                            <Col span={12}/>
                            Algo
                        </Row> */}
                        <h3 style = {{align:'center'}}> Productos </h3>
                        <div>
                            {this.state.data.map((product) => <div key = {product.id}> <ShoppingElement data_p = { product }  onAddItems={this.AddItems}/> </div>)}
                        </div>
                    </div>
                    <div style = {{width:'20%', backgroundColor:'#AF0', float:'left', height:'450px'}}>
                        <h3> Shopping Cart </h3>
                        <div>{this.ShoppingList()}</div>
                    </div>
                </div>
            </Content>
        )
    }
}

export default ShoppingContent;
