import logo from "./logo.png";
import "./App.css";
import { Button, ListGroup, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

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
      <Counter> </Counter>

     
      
    </div>
  );
}

const Counter = () => {

const [count, setCount] = useState(0);
const handleIncrease = () => setCount(count + 1);
  const handleDecrise = () => setCount(count - 1);
  

  return(
       <div className="hello" >
         <h2>Counter : {count}</h2>
         <button onClick={handleIncrease}>+1</button><br /> <br />
         <button onClick={handleDecrise}>-1</button>
       </div>

  )
}












function ExternalUser() {
 /*  const [user, setUser] = useState([]) ;
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data) )
  },[]) */

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);


  return (
    <div className="hello">
      <h2>ExternalUser: {users.length}</h2>
      {
        users.map( user => <li style={{marginTop: "30px"}}> {user.name}</li>)
      }
    </div>
  );
}

export default App;
