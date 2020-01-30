import React, {Component} from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super()

    this.state={
      foods: ['apple', 'candy', 'water',] 
    };
  }



render(){
  let foodsToDisplay = this.state.foods.map((Element, index) => {
    return <h2>key={index}>{Element}</h2>
   });

  return() {
    <div className='App'>{foodsToDisplay}</div>;

    }
  }
}
  export default App