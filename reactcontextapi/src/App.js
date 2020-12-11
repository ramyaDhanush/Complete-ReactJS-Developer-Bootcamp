import React from 'react';
import './App.css';
import {Provider} from './components/Provider'
import Context from './components/Context'

const Agents = ()=>{
  return <AgentOne/>
}

const AgentOne = () =>{
  return <AgentTwo/>
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
