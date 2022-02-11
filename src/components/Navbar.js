import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <p className='text-2xl bg-blue-700 text-white font-bold py-1 px-2 rounded dark:bg-gray-900 dark:text-white'>SearchIt! 🔍</p>
            </Link>
            <button type='button' onClick={ () => setDarkTheme(!darkTheme) } className='text-xl dark:bg-blue-700 dark:text-white text-gray-900 border dark:border-blue-700 rounded px-2 py-1 hover:shadow-lg'>
                { darkTheme ? '☀️ Light' : '🌙 Dark' }
            </button>
        </div>
        <Search />
    </div>
  )
}
