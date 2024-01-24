import React, { useState } from 'react'

function App() {

  const [color, setColor] = useState("cyan");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    
      <div className='justify-center fixed flex flex-wrap inset-x-0 bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "red"}} 
          onClick={() => setColor("red")}
          >
            Red
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >
            Green
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "yellow", color: "black"}}
          onClick={() => setColor("yellow")}>
            Yellow
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>
            blue
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}>
            Black
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "white", color:"black"}}
          onClick={() => setColor("white")}>
            white
          </button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "gray"}}
          onClick={() => setColor("gray")}>
            Gray
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "pink"}}
          onClick={() => setColor("pink")}>
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
