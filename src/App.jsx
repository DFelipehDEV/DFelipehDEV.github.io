import { useState } from 'react'
import avatar from './assets/Avatar500.png'

function App() {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="text-3xl text-center">
          DFelipeh
        </h1>
        <img src={avatar} className='w-25 rounded-full'></img>
      </div>
    </>
  )
}

export default App
