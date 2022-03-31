import React from 'react'

function PagesList({items, search}) {
  let array = items
  if (search) {
    array = array.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <div className='home__pages'>
      {array.map((item, index) => 
      <a className='home__pages-item' href='#pageId' key={index}>
        <h3 className='home__pages-title'>{item.name}</h3>
        <span className='home__pages-date'>{item.date}</span>
      </a>
      )}
    </div>
  )
}

export default PagesList