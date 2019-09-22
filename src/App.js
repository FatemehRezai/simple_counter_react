import React,{Component} from 'react';
import ReactDom from  'react-dom';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      count : 0,
    }
  }
  render(){
    return <>
      <div class="main">
        <h2>counter: 5</h2>
        <div class="btn-group">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </>;
  }


}

export default App;

