import logo from "./logo.png";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";

function App() {
  const design = {
    color:"red",
    width:'400px',
    backgroundColor:"green"
  }
  return (
    <div className="App">
      <h1 className="hello"> Hello world</h1>
      <ExternalUser> </ExternalUser>
     
      
    </div>
  );
}

function ExternalUser() {
  const [user, setUser] = useState([]) ;
  


  return (
    <div className="hello">
      <h2>ExternalUser</h2>
    </div>
  );
}

export default App;
