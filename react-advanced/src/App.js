import React,{useState} from 'react'


function App() {
  const [first, setfirst] = useState({
    name:'muji',
    email:'wow'
  })
  const eh = () => {
    setfirst({email:'edited'})
  }
  return (
    <div className="container">
      <h1>{first.name}</h1> 
      <h1>{first.email}</h1>
      <button className="btn btn-primary" onClick={eh}>hello</button>
    </div>
  );
}

export default App;
 