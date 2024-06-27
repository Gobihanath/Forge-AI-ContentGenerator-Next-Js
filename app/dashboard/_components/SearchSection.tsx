import { SearchIcon } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {

  


  return (
    <div className='p-10 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 flex  flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
            <SearchIcon className='text-primary'/>
            <input type='text' placeholder='Search templates'
            onChange={(event)=>onSearchInput(event.target.value)} 
            className='bg-transparent w-full outline-none text-black'/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
