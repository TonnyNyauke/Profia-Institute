'use client'

import Login from "./Login";
import ColorModeToggle from './ColorModeToggle'
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  function openLogin(){
    setToggle(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className='flex justify-end'>
        {!toggle && <button className='border border-blue-500 rounded-md font-semibold px-2 py-2 mx-4'
        onClick={openLogin}>Login</button>}
        {toggle && <Login />}
        <ColorModeToggle />
      </nav>
       <div className='flex justify-center items-center '>
        
       </div>
    </main>
  );
}
