import React from 'react';

class CartItem extends React.Component {
  constructor(props){
    super(props);
  }



  DelItem = () => {
    //if(this.state.number == 0) return
    console.log(this.props.id)
    this.props.onDelFromCart({ id : this.props.id})
  }



  render(){
    return (
        <div className="cart-item">
            {this.props.count}x   <i style = {{fontSize:'15px'}}>{this.props.name}</i>
            {/* {this.props.name} | {this.props.count} -> */}
            <button onClick = {this.DelItem}> Eliminar </button>
        </div>
    );
  }
}

export default CartItem;