import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col extraSm:flex-row gap-2 extraSm:justify-between'>
        <h2>Все про ПК</h2>
        <div className='flex gap-4 justify-center'>
            <NavLink to='/' className='link block px-9 py-4 '>Будова ПК</NavLink>
            <NavLink to='/video' className='link block px-9 py-4'>Відео</NavLink>
            <NavLink to='/test' className='link block px-9 py-4'>Тест</NavLink>
        </div>
        <div className='w-[120px]'></div>
    </div>
  )
}

export default Header