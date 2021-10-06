import React from 'react';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';



class ShoppingElement extends React.Component {
  constructor(props){
    super(props);

    //let {id,productName,Description } = props.data_p

    let number_p = 0;
    this.state = {
      //id : props.id,
      number : 0,
      //name : props.productName,
      //descrip : props.Description
    };
    //this.setState({number:0})
  }

  IncrementButton = () => {
    this.setState(prev => ({ number : prev.number + 1 }));
  }

  DecrementButton = () => {
    if (this.state.number === 0) return
    this.setState(prev => ({ number : prev.number - 1 }));
  }

  
  Add = () => {
    this.setState(prev => ({ number : prev.number - prev.number }));
    console.log(this.state.number)
    if(this.state.number === 0) return
    this.props.onAddItems({ id : this.props.id, name: this.props.productName, count: this.state.number})
    
  }


  shouldComponentUpdate() {
    console.log('Something change')
    return true;
  }

  render(){
    const Change = changeNumber => {
      this.setState({ number : changeNumber});
    }
    return (
      // <div>
      //   Hello
      // </div>
      //<div className="grid-responsive" style ={{border:'thin solid black', padding:'1rem', width:'50%'}}>
      //<div style={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex', width:'400px', height:'100%'}}>
    <div style={{display:'flex', width:'400px', height:'100%'}} lg={{span:7,offset:0}} xs={{span:24}}>
      <div style = {{width:'40%'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg" style = {{width:'100%', height:'80%', borderRadius: '10px', marginRight:'5%', marginTop:'10%'}}/>
      </div>
      <div style = {{width:'60%',textAlign:'center'}}>
        <p><b>{this.props.productName}</b></p>
        <p style = {{fontSize:'12px', marginRight:'15%', marginTop:'0px'}}><i> {this.props.Description} </i></p>
        <div className="button-field">
          <p style = {{textAlign:'left'}}>5$     

              <Button onClick = {this.DecrementButton} type="primary" shape="circle" style = {{float:'center'}}> - </Button>
                {this.state.number}
              <Button onClick = {this.IncrementButton} type="primary" shape="circle" style = {{float:'center'}}> + </Button>
              {/* <button onClick = {this.DecrementButton} style = {{align:'center'}}>  - </button>
                {this.state.number}
              <button onClick = {this.IncrementButton } style = {{align:'center'}} > + </button> */}
              {/* <InputNumber min={1} max={100} defaultValue={this.state.number} onChange={Change} /> */}
              <Button onClick = {this.Add} type="primary" shape="circle" style = {{float:'right', marginRight:'15%'}}> + </Button>
            {/* <button onClick = {this.Add} style = {{float:'right', marginRight:'15%'}}> + </button> */}
          </p>
      </div>
      
      </div>
    </div>
    );
  }
}

export default ShoppingElement;