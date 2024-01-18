import {useState} from 'react';
import './App.css';

function App() {

  let [value,SetValue]=useState(0);

  function increase(){
    SetValue(value=value+1);
  }

  function decrease(){
    if(value>0){
      SetValue(value=value-1);
    }
    else{
      alert("This is the practice project and added a functionality in which value didn't become negative :) ");
    }
  }

  return (
    <>
    <h1>{value}</h1>
    <div className="btn-holder">
    <button className="add" onClick={increase}>+</button>
    <button className="remove" onClick={decrease}>-</button>
    </div>
    </>
  );
}

export default App;
