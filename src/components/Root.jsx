import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className='max-w-[1280px] px-[20px] mx-auto'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root