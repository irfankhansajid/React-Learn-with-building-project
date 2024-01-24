import React, { useCallback, useState, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "~!@#$%^&*()-_=+[{]}<?>"
    }

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null)

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator?.clipboard.writeText(password)

  }, [password])


  return (
  <div className="py-8 px-4 mx-auto max-w-md bg-gray-800 mt-10 text-orange-400">
    <h1 className="text-center text-white text-2xl font-semibold mb-4">Password Generator</h1>
    <div className="flex shadow-lg rounded-lg overflow-hidden mb-4 mt-2">
      <input type="text"
      max={100}
      min={6}
      value={password}
      placeholder='Password'
      className="outline-none w-full px-2 font-semibold py-3"
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordClipBoard}
      className="bg-blue-600 px-4 shrink-0 text-white hover:bg-blue-800">Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'></div>
      <div className="flex items-center gap-x-1">
        <input type="range"
        max={100}
        min={6}
        value={length}
        id="length"
        className="cursor-pointer"
        onChange={(e) => {
          setLength(e.target.value)
        }}
        />
        <label htmlFor="length">Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        className="cursor-pointer"
        onChange={(e) => {
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        className="cursor-pointer"
        onChange={(e) => {
          setCharAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  
  )
}

export default App