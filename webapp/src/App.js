import './App.css'
import LoggedIn from './LoggedIn'
import React, {useState} from "react";
import NotLogged from "./NotLogged";

function App() {
  const [logged, setLogged] = useState(true)

  const switcher = () => {
    setLogged(!logged);
    console.log(logged)
  }
  return (
      <div className='app'>
        <button onClick={()=>switcher()}>switch</button>
        { (logged) ? (
            <LoggedIn/>
        ) : (
            <NotLogged/>
        )}
      </div>
  );
}

export default App;
