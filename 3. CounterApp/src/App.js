import React,{useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter App Using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset to 0</button> 
      <button onClick={()=>count > 9 ? "" : setCount(count+1)}>Increment +1</button> 
      <button onClick={()=>count< 1 ? "" : setCount(count-1)}>Decrement -1</button> 
    </div>
  );
}

export default App;
