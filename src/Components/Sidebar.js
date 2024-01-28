import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='mx-3 p-3 shadow-lg w-48'>
        <ul>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'><Link to="/">Home</Link></li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Sports</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Gaming</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Movies</li>
      </ul>
      <h1 className='font-bold py-3 shadow-lg'>Subscriptions</h1>
      <ul>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Music</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Sports</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Gaming</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Movies</li>
      </ul>
      <h1 className='font-bold py-3 shadow-lg'>Watch Lager</h1>
      <ul>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Music</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Sports</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Gaming</li>
        <li className='mb-2 py-1 px-5 w-full hover:bg-slate-100'>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
