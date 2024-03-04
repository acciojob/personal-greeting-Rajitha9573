
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  let [name, setName] = useState("")

  function updateName(event){
     setName(event.target.value);
    console.log(name);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label id="name">Enter your name:</label><br/>
        <input type="text" value = {name} onChange={updateName}/>
        <p>Hello {name}!</p>
    </div>
    
  )
}

export default App
