import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { json } from 'react-router-dom';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  // useEffect(() => {
  //   const timer = setTimeout(()=> {
  //   if (searchCache[searchQuery]) {
  //    setSuggestions(searchCache[searchQuery]);
  //   } else {
  //    getSearchSuggestion();
  //   }
  // },500);

  //   return() => {
  //     clearTimeout(timer)
  //   }
  // }, [searchQuery]);

  // const getSearchSuggestion = async () => {
  //   try {
  //     const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch');
  //     }
  //     const data = await response.json();
  //      setSuggestions(data[1]);
  //      dispatch(cacheResults{
    // [searchQuery] : json[1]
  // }))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
    <div className='flex gap-6 col-span-1' >
      <img 
      onClick={() => toggleMenuHandler()}
      className='h-8 cursor-pointer' alt='menu'
      src='https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' 
      />

      <img className='h-8 me-4' alt='youtube-logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'
      />
    </div>
    <div className="col-span-10 px-10">
      <div>
        <input className='w-1/2 border border-gray-300 p-2 rounded-l-full' 
        type='text' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)} />
        <button className="border border-gray-300 p-2 px-5 rounded-r-full bg-gray-100">🔍</button>
        </div>
        {showSuggestions && (
        {/* <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-200">
          <ul>
            {suggestions?.map((s) => (
            <li key={s} className="py-2 shadow-sm hover:bg-gray-300" >
              {s}</li>
            ))}
            </ul>
        </div> */}
        )}
    </div>
    <div className='col-span-1' >
        <img className='h-8' alt='user'
        src='https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png'
        />
    </div>
    </div>
  )
}

export default Head
