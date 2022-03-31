import React from 'react'


function FavoritesList({ items }) {
  return (
    <div className='home__favorites'>
    <h2 className='home__favorites-title'>Favourites</h2>
      {items.map(item =>
        <a 
        className='home__favorites-item'
        href="#pageId"
        >{item}</a>
      )}
    </div>
  )
}

export default FavoritesList
