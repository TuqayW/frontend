import React from 'react'
import './up.scss'
import { useState } from 'react'

const Up = () => {
  
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
    setCheck(event.target.checked);
  }
  return (
    <div className='up'>
      <div className="p-u">
        <div className="yuxari">
          <label>
            <input for="check" className='q' type="image" src='./imgs/checked.svg' />
            <input className='w' type="checkbox" name='check' onChange={handleChange}/>
            <span for="check">Pick - Up</span>
          </label>
        </div>
        <div className="asagi">
          <div className="selection">
            <h1>Locations</h1>
            <select name='Select your city'>
              <option value="space">Select your city</option>
              <option value="Az">Azerbaijan</option>
              <option value="Kx">KababXana</option>
              <option value="It">It Innovations</option>
            </select>
          </div>
          <div className="selection">
            <h1>Date</h1>
            <select name='Select your city'>
              <option value="space">Select your date</option>
              <option value="Es">Devenin quyrugu suya deyende</option>
              <option value="Ur">Ureyim Isdeyende</option>
              <option value="Va">Vapseta bilsen ne var</option>
            </select>
          </div>
          <div className="selection">
            <h1>Time</h1>
            <select name='Select your city'>
              <option value="space">Select your time</option>
              <option value="Pi">Pisik suya girende</option>
              <option value="Na">Nagarassan</option>
              <option value="12">12:05</option>
            </select>
          </div>
        </div>
      </div>
      <img src="./imgs/Switch.svg" alt="" />
      <div className="p-u">
        <div className="yuxari">
            <input for="check" className='q' type="image" src='./imgs/checked.svg' />
            <input style={{opacity:0}} className='w' type="checkbox" name='check' onChange={handleChange}/>
            <span for="check">Drop - off</span>
          </div>
        <div className="asagi">
          <div className="selection">
            <h1>Locations</h1>
            <select name='Select your city'>
              <option value="space">Select your city</option>
              <option value="Az">Azerbaijan</option>
              <option value="Kx">KababXana</option>
              <option value="It">It Innovations</option>
            </select>
          </div>
          <div className="selection">
            <h1>Date</h1>
            <select name='Select your city'>
              <option value="space">Select your date</option>
              <option value="Es">Devenin quyrugu suya deyende</option>
              <option value="Ur">Ureyim Isdeyende</option>
              <option value="Va">Vapseta bilsen ne var</option>
            </select>
          </div>
          <div className="selection">
            <h1>Time</h1>
            <select name='Select your city'>
              <option value="space">Select your time</option>
              <option value="Pi">Pisik suya girende</option>
              <option value="Na">Nagarassan</option>
              <option value="12">12:05</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Up