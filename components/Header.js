import React from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-2 sm:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                    src='http://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    />
            </div>
            <div className=' hidden sm:flex items-center md:border-2 md:shadow-sm hover:shadow-md rounded-full py-2 '>
                <input className='flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your search' />
                <SearchIcon className='hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
            </div>
            <div className='flex space-x-1 items-center justify-end text-gray-500'>
                <button className='hidden md:inline text-sm cursor-pointer rounded-full p-3 hover:bg-gray-100'>Become a host</button>
                <button className="cursor-pointer rounded-full p-3 hover:bg-gray-100">
                    <GlobeAltIcon className='h-6' />
                </button>

                <div className="flex items-center space-x-1 border-2 p-2 rounded-full cursor-pointer hover:shadow-md">
                    <MenuIcon className='h-4'/>
                    <UserCircleIcon className='h-7'/>
                </div>
            </div>
        </header>
    )
}

export default Header
