import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'



function Header() {

  
  return (
    <div className='p-5 shadow-sm border bottom-2 flex justify-between items-center bg-sky-800'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-md bg-white'>
        <Search/>
        <input type='text' placeholder='Search here'
        className='outline-none' />
      </div>

      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-sm text-xs text-white px-2'>Your customized AI content generator</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header
