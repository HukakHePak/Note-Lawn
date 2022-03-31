import React, { useState } from 'react'

function SearchBar() {
  const [value, setValue] = useState('')

  return (
    <form className='home__search'>
      <input type='text' onChange={(e) => setValue(e.target.value)}/>
    </form>
  )
}

export default SearchBar