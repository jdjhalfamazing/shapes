import './App.css';
import { shapes } from './Shapes';
import  Circle  from './Circle';
import  Triangle  from './Triangle';
import React from 'react';

const title = "";
const images = [];

for(const shape in shapes) {
  images.push(
    <img 
       key={shape} 
       className = 'shape'
       alt={shapes[shape].name}
       src={shapes[shape].image}
       role='button'
       onClick={displayName}
    />
  )
}

function Shape(){
  return (
    <img
    src="/images/square.png"
    alt="square"
    width="100px"
   
    />
  )
}




function displayName(e) {
  const selectedShape = e.target.alt;
  const shapeInfo = shapes[selectedShape];
  
  const name = shapeInfo.name;

  document.getElementById('name').innerHTML = name;

}

function App() {
  return (
    <div className="App">
      <h1>{ title === "" ? "Click on a shape for the name" : title }</h1>
      <p id='name'></p>
      <div className='shapes'>
        {images}
     </div>
    <section>
      <h1>My Squares</h1>
     <Shape />
     <Shape />
     <Shape />
     </section>
     <h1>My Circle</h1>
    <Circle />
    <h1>My Triangle</h1>
    <Triangle />
    </div>
  );
}

export default App;

