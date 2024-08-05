import React from 'react'
import SidebarLeft from './SidebarLeft'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

function page() {
  return (
    <div>
        <nav className='m-4'>
            <Link href="/home"><FaArrowLeft /></Link>
        </nav>
        <SidebarLeft />
    </div>
  )
}

export default page