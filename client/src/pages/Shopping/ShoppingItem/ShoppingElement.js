import React from 'react';

class ShoppingElement extends React.Component {
  constructor(props){
    super(props);

    let {id,productName,Description } = props.data_p


    this.state = {
      id : id,
      number : 0,
      name : productName,
      descrip : Description
    };
  }

  IncrementButton = () => {
    this.setState(prev => ({ number : prev.number + 1 }));
  }

  DecrementButton = () => {
    if (this.state.number === 0) return
    this.setState(prev => ({ number : prev.number - 1 }));
  }

  Add = () => {
    if(this.state.number === 0) return
    this.setState(prev => ({number : 0 }));
    this.props.onAddItems({ id : this.state.id, name: this.state.name, count: this.state.number})
  }

  render(){
    return (
      // <div>
      //   Hello
      // </div>
      //<div className="grid-responsive" style ={{border:'thin solid black', padding:'1rem', width:'50%'}}>
      <div style={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
        <div>
          <p> There is a photo right here </p>
        </div>
      <div>
      <ul>
        <li>{this.state.name}</li>
        <li>{this.state.descrip}</li>
        <li>Price</li>
      </ul>
      </div>
      <div className="button-field">
        <button onClick = {this.DecrementButton}> - </button>
          {this.state.number}
        <button onClick = {this.IncrementButton}> + </button>
        <button onClick = {this.Add}> Add to cart </button>
      </div>
    </div>
    );
  }
}

export default ShoppingElement;