import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-md min-w-full p-2'>
      <ul className="justify-between mx-3 flex">
        <li className="mr-6 text-xl">
            <a className="hover:text-orange-500" href='/'><strong>WJTIM</strong></a>
        </li>
        <ul className='justify-between mx-3 flex'>
            <li className="mr-6 text-lg">
                <a className="hover:text-orange-500" href='/aboutme'>me</a>
            </li>
            <li className="mr-6 text-lg">
                <a className="hover:text-orange-500" href='/projects'>projects</a>
            </li>
            <li className="mr-6 text-lg">
                <a className="hover:text-orange-500" href='/stats'>stats</a>
            </li>
            <li className="mr-6 text-lg">
                <a className="hover:text-orange-500" href='/terminal'>cmd</a>
            </li>
        </ul>
    </ul>
    </div>
  )
}

export default Navbar
