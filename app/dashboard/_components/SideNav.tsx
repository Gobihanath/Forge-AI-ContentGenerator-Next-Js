"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../../../public/Logo1.png'
import logo1 from '../../../public/Logo3.png'
import { FileClock, Home, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav() {

  const MenuList=[
    {
      name:'Home',
      icon:Home,
      path:'/dashboard'
    },
    {
      name:'History',
      icon:FileClock,
      path:'/dashboard/history'
    },
    {
      name:'Setting',
      icon:Settings,
      path:'/dashboard/settings'
    },

  ]

  const path=usePathname();
  useEffect(()=>{
    console.log(path)

  },[])


  return (
    <div className='h-screen p-5 shadow-sm border bg-gray-400'>
      <div className='flex justify-center'>
      <Image src={logo} alt='logo' width={150} height={100}/>
      </div>
      <hr className='mt-3 border' />

      <div className='mt-10'>
        {MenuList.map((menu,index)=>(
          <Link href={menu.path}>
          <div key={index} 
          className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
          ${path==menu.path && 'bg-primary text-white'}
          `}>
            <menu.icon className='h-7 w-7'/>
            <h2 className='text-lg'>{menu.name}</h2>
          </div>
          </Link>
        ))}
      </div>
      
      <div className='mt-10'>
        <Image src={logo1} alt='logo' width={200} height={250}/>
      </div>

    </div>
  )
}

export default SideNav
