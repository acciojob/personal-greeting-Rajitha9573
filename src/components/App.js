
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  let [name, setName] = useState("")

  function updateName(event){
     let name = setName(event.target.value);
    console.log(name);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label id="name">Enter your name:</label><br></br>
        <input type="text" onChange={updateName}/>
        <div>Hello {name}!</div>
    </div>
    
  )
}

export default App
