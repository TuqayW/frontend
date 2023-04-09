import React from 'react'
import "./nav.scss"

const nav = () => {
  return (
    <div className='nav'>
      <div className="left">
        <h1>MORENT</h1>
        <div className="search-bar">
          <img src="./imgs/search-normal.svg" alt="" />
          <input placeholder='Search something here' type="search" />
          <img src="./imgs/filter.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="btns">
          <img src="./imgs/Vector.svg" alt="" />
          <img src="./imgs/notification.svg" alt="" />
          <img src="./imgs/settings.svg" alt="" />
        </div>
        <div className="pfp">
          <img src="./imgs/Image.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default nav