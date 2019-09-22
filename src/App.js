import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      count : 0,
    }
  }

  increment = () =>{
    console.log("increment");
    let {count} =this.state;
    this.setState({count: ++count})
  }

  decrement = () => {
    console.log("decrement");
    
    let {count} =this.state;
    this.setState( {count: --count});
  }
  render(){
    let {count} =this.state;
    return <>
      <div class="main">
        <h2>counter: {count}</h2>
        <div class="btn-group">
          <button onClick = {this.decrement}>-</button>
          <button onClick = {this.increment}>+</button>
        </div>
      </div>
    </>;
  }


}

export default App;

