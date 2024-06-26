import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border bottom-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
        <Search/>
        <input type='text' placeholder='Search here'
        className='outline-none' />
      </div>

      <div>
        <h2 className='bg-primary p-1 rounded-sm text-xs text-white px-2'>Your customized AI content generator</h2>
      </div>
    </div>
  )
}

export default Header
