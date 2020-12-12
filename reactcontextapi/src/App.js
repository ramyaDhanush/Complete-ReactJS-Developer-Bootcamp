import React from 'react';
import './App.css';
import {Provider} from './components/Provider'
import Context from './components/Context'

const Agents = ()=>{
  return <AgentOne/>
}

const AgentOne = () =>{
  return (
    <AgentTwo/>
  )
}

const AgentTwo = () =>{
  return <AgentBond/>
}

const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context)=>(
          <>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <h2>Mission Status: {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>Choose To Accept</button>

          </>
        )
      }
    </Context.Consumer>
  )
}


const App = ()=> {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  ); 
}

export default App;
