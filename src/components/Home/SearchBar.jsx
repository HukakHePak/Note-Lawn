import React, { useState } from 'react'
import SearchBtn from '../../img/search.svg'
import AddBtn from '../../img/addpage.svg'

function SearchBar({setSearch}) {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <form className='home__search'>
    <button className='home__main-btn'>
    Boards
    <img src={AddBtn} alt=''/>
    </button>
      <input 
      className='home__search-input'
      type='text'
      value={value}
      onChange={handleChange}
      placeholder='Search...'
      />
      <button className='home__search-btn' type='button'>
        <img src={SearchBtn} alt=''/>
      </button>
    </form>
  )
}

export default SearchBar