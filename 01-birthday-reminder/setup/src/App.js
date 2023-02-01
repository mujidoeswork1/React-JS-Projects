import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const click = () =>{
    setPeople([])
  }
  return (
    <main>
    <section className='container'>
  <h3>
  {people.length} Birthdays today
  </h3>
  <List  people={people}/>
  <button className="btn" onClick={click}>clear all</button>
  </section>
  </main>
  );}

export default App;