import React from 'react'
import {useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const History = () => {
  const history = useSelector((state)=>state.history.history);


  return (
    <div className='history'>
      <h1 className='searchhistory'>Search History</h1>
      <ul>
        {
          history.map((search , index)=>(
            <li key={index}>
              <NavLink to={`/search/${search}`} >{search}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default History