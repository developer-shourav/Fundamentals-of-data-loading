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
     
      
    </div>
  );
}

function ExternalUser() {
 /*  const [user, setUser] = useState([]) ;
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data) )
  },[]) */

  const [comments, setComments] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => setComments(data))
  },[]);


  return (
    <div className="hello">
      <h2>ExternalUser: {comments.length}</h2>
      {
        comments.map( comment => <li style={{marginTop: "30px"}}> {comment.title}</li>)
      }
    </div>
  );
}

export default App;
