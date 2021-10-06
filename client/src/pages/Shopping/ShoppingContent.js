import React, {PureComponent} from 'react';
import {Layout, Col, Row, Pagination} from 'antd';
import ShoppingElement from './ShoppingItem/ShoppingElement'
import CartItem from './CartItem/CartItem'


const { Content } = Layout;

const list_element = [
    {id : 0, productName:'Pizza', Description:'La mejor pizza'},
    {id : 1, productName:'Burger', Description:'Hamburguesa con todo'},
    {id : 3, productName:'Sushi', Description:'Best Sushi ever'},
    {id : 4, productName:'Hot Dog', Description:'Hot dog'},
    {id : 5, productName:'Bread', Description:'Bread with chesse'},
    {id : 6, productName:'Brazo Gitano', Description:'Brazo '},
    {id : 7, productName:'Cake', Description:'Chocolate cake'},
    {id : 8, productName:'Ice cream', Description:'Ice cream'},
    {id : 9, productName:'Salchipapa', Description:'La mejor Salchipapa'}
]


function Getcards(props) {
    let empresas_filter = []
    if (props.filter_empresas.length > 0){
      empresas_filter = props.filter_empresas
    }else{
      empresas_filter = list_element.filter((_,index) => {
        if (props.init <= index && props.init + 6 > index){
          return true
        }
        return false
      })
    }
    let ItemCards1 = empresas_filter.map((empresa,idx) => {
      if (idx<2){
        return(
          <div style = {{width:'46%', marginLeft:'2%', marginRight:'2%', border: '1px solid gray', borderRadius: '10px'}}>
            <Col style = {{height:'150px', backgroundColor:'#FFF', float:'left'}} lg={{span:7,offset:0}} xs={{span:24}}>
              <ShoppingElement id = {empresa.id} productName = {empresa.productName} Description = {empresa.Description}  onAddItems = {props.items} numero = {0}/>
            </Col>
          </div>
        )
      }
      return []
    });
    let ItemCards2 = empresas_filter.map((empresa,idx) => {
      if (idx<4 && idx >= 2){
        return(
          <div  style = {{width:'46%', marginLeft:'2%', marginRight:'2%', border: '1px solid black', borderRadius: '10px'}}>
            <Col style = {{height:'150px', backgroundColor:'#FFF', float:'left'}} lg={{span:7,offset:0}} xs={{span:24}} >
                <ShoppingElement id = {empresa.id} productName = {empresa.productName} Description = {empresa.Description}  onAddItems = {props.items} numero = {0}/>
            </Col>
          </div>
        )
      }
      return []
    });
    let ItemCards3 = empresas_filter.map((empresa,idx) => {
      if (idx<6 && idx >= 4){
        return(
          <div style = {{width:'46%', marginLeft:'2%', marginRight:'2%',  border: '1px solid gray', borderRadius: '10px'}}>
            {/* // <Col style = {{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}}>
            //     <CompanyCard name={empresa.nombre} desc={empresa.descripcion} imagen={empresa.src}/>
            // </Col> */}
            <Col style = {{height:'150px', backgroundColor:'#FFF', float:'left'}} lg={{span:7,offset:0}} xs={{span:24}}>
                <ShoppingElement id = {empresa.id} productName = {empresa.productName} Description = {empresa.Description}  onAddItems = {props.items} numero = {0}/>
            </Col>
          </div>
        )
      }
      return []
    });
  
    let CardsObj = []
    for (let i = 0; i<3; i++){
      let obj = null
      if (i===0){obj = ItemCards1 }
      else if(i===1){obj = ItemCards2 }
      else{
        obj = ItemCards3
      }
      
      CardsObj.push(<Row style={{marginTop:'4%'}}>{obj}</Row>)
    }
  
    return(
        CardsObj
    )
};

// function RenderRows(props) {

//     let auxilary = ['','','','','','']
//     let var1 = {id : 6, productName:'Brazo Gitano', Description:'Brazo '}
//     let counter = 0
//     let newIndex = 0
//     let element = {id : 6, productName:'Brazo Gitano', Description:'Brazo '}
//     if (props.page_number != 0){newIndex = (props.page_number - 1) * 6}
//     for (var i = newIndex; i < props.list_t.length; i++) 
//         {
//             if (counter === 6){break}
//             auxilary[counter] = list_element[i];
//             counter += 1
//         }
//     console.log('Renderizando', props.page_number)
    
//     if (props.page_number === 2)
//     {
//         var1 = {id : 4, productName:'Hot Dog', Description:'Hot dog'}
//         console.log(var1)
//     }

//     return(
//         <div >
//             <h3 style = {{align:'center'}}> Productos </h3>
//             <Row>
//                 <Col style = {{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[0]} */}
//                  {/* {list_text[0]} */}
//                  {/* {renderElement(auxilary[0])} */}
//                     <ShoppingElement data_p = {var1}  onAddItems = {props.items}/>
//                 </Col>
//                 <Col style={{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[1]} */}
//                     {/* {this.renderElement(this.state.current_list[1])} */}
//                     <ShoppingElement data_p = {auxilary[1]}  onAddItems={props.items}/>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col style = {{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[2]} */}
//                     {/* {this.renderElement(this.state.current_list[0])} */}
//                     <ShoppingElement data_p = {auxilary[2]}  onAddItems = {props.items}/>
//                 </Col>
//                 <Col style={{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[3]} */}
//                     {/* {this.renderElement(this.state.current_list[1])} */}
//                 </Col>
//             </Row>
//             <Row>
//                 <Col style = {{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[4]} */}
//                     {/* {this.renderElement(this.state.current_list[0])} */}
//                                 {/* <ShoppingElement data_p = {this.state.datos}  onAddItems = {props.addItems}/> */}
//                 </Col>
//                 <Col style={{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {auxilary[5]} */}
//                     {/* {this.renderElement(this.state.current_list[1])} */}
//                 </Col>
//             </Row>
//         </div>
//     )
//   };


// function RenderRow(props)
// {
//     return (
//         <Row>
//             <Col style = {{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 Hello
//                 {/* {this.renderElement(this.state.current_list[0])} */}
//                 <ShoppingElement data_p = {props.datos}  onAddItems = {props.addItems}/>
//             </Col>
//             <Col style={{height:'150px', backgroundColor:'#0F0', width:'50%', float:'left'}} >
//                 {/* {this.renderElement(this.state.current_list[1])} */}
//                 {/* <ShoppingElement data_p = {this.state.current_list[1]}  onAddItems={this.AddItems}/> */}
//             </Col>
//         </Row>
//     )
// }


class ShoppingContent extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            //data : props.data,
            last_index : 0,
            // data : [
            //     {id : 0, productName:'Pizza', Description:'La mejor pizza'},
            //     {id : 1, productName:'Burger', Description:'Hamburguesa con todo'},
            //     {id : 3, productName:'Sushi', Description:'Best Sushi ever'},
            //     {id : 4, productName:'Hot Dog', Description:'Hot dog'},
            //     {id : 5, productName:'Bread', Description:'Bread with chesse'},
            //     {id : 6, productName:'Brazo Gitano', Description:'Brazo '},
            //     {id : 7, productName:'Cake', Description:'Chocolat cake'},
            //     {id : 8, productName:'Ice cream', Description:'Ice cream'},
            //     {id : 9, productName:'Salchipapa', Description:'La mejor Salchipapa'}
            // ],
            number : 0,
            shopping_cart : props.cart,
            current_list : ['','','','','',''],
            filtro : []
            // shopping_cart: []
        };

        //const {current_list} = this.state

        for (var i = 0; i < list_element.length; i++) 
        {
            if (i >= 6){break}
            else{this.state.current_list[i] = list_element[i]}
        }
        this.setState(this.state.current_list)
        console.log(this.state.current_list)
    }

    shouldComponentUpdate() {
        console.log('Something change')
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

    renderElement = data => {
        console.log(data)
        if (data === ""){return}
        else{return (<ShoppingElement data_p = {data}  onAddItems={this.AddItems}/>)}
    }


    ChangePage = number =>{

        const new_list = [
            {id : 4, productName:'Hot Dog', Description:'Hot dog'},
            {id : 5, productName:'Bread', Description:'Bread with chesse'},
            {id : 6, productName:'Brazo Gitano', Description:'Brazo '},
            {id : 7, productName:'Cake', Description:'Chocolat cake'},
            {id : 8, productName:'Ice cream', Description:'Ice cream'},
            ''
        ]

        if (number === 2)
        {
            this.setState({current_list:new_list})
        }
    }
    
    render(){
        const ChangePage = number =>{
            const {last_index} = this.state
            let new_index = (number - 1) * 6
            //last_index = number
            console.log('Last index', last_index)
            console.log(number)
            this.setState({last_index:new_index})
        }
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
                <div style = {{width:'100%', height:'600px', display:'inline-block'}}>
                    <div style = {{width:'20%', backgroundColor:'#A0C', float:'left',height:'450px'}}>
                        <h3> Categorias </h3>
                    </div>
                    <div style = {{width:'60%', backgroundColor:'#FFF', float:'left', align:'center', height:'600px' }}>
                        <Getcards init={this.state.last_index} page_number = {this.state.last_index}  items = {this.AddItems} filter_empresas={this.state.filtro}/>
                        {/* <div>
                            {this.state.data.map((product) => <div key = {product.id}> <ShoppingElement data_p = { product }  onAddItems={this.AddItems}/> </div>)}
                        </div> */}
                         <Pagination 
                            total = {list_element.length}
                            defaultPageSize = {1}
                            pageSize={6}
                            onChange = {ChangePage}
                            style={{textAlign:'center',display:'flex',justifyContent:'center'}}
                        />
                    </div>
                    <div style = {{width:'20%', backgroundColor:'#AF0', float:'left', height:'450px'}}>
                        <h3> Mi pedido </h3>
                        <div>{this.ShoppingList()}</div>
                    </div>
                </div>
            </Content>
        )
    }
}

export default ShoppingContent;