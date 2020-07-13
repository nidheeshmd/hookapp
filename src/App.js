import React, { useState } from 'react';

import './App.css';

import UseEffectExample from './use-effect-hook/use-effect-hook.component';

/*class App extends Component {

  constructor(){
    super();
    this.state={
      name: 'Nidheesh'
    };
  }
  setName = () => {
    this.setState({name:'Nidheesh Davis'});
  };
  render(){
  return (
    <div className="App">
      <div >
        <h1>{this.state.name}</h1>
        <button onClick={this.setName}>Set Nidheesh Davis</button>
      </div>
    </div>
  );
};};
export default App;*/

//###the above class component converting into function component and use to hooks to manipulate state.###

//## we use useState component when we need a local state in component and not use any 'life cycle' methods

const App = () => {
  const[name,setName] = useState('Nidheesh');
  const[address,setAddress1] = useState('India');
  return(
  <div>
    <h1>{name}</h1>
    <h2>{address}</h2>
        <button onClick={() => setName('Nidheesh Davis')}>Set Nidheesh Davis</button>
        <button onClick={() => setAddress1('Germany')}>Set Address</button>
        <UseEffectExample/>
  </div>
)};



export default App;
