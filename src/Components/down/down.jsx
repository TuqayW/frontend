import React from 'react'
import './down.scss'
import cars from '../../data/data.json'

const Down = () => {
  const navigate = () =>{
    
  }
  return (
    <div className='down'>
        <div className="upping">
            <h1 className='a'> Popular Car</h1>
            <h1 className='b'>View All</h1>
        </div>
        <div className="cars">
        {
        cars.map(car => {
          return (
            <div key={car.id} className='card'>
                <div className="names">
                  <h1 className='name'>{car.name}</h1>
                  <h1 className='type'>{car.type}</h1>
                </div>
                <img className='main-img' src={car.img} alt="" />
                <div className="specs">
                  <div className="group-1">
                    <img src="./imgs/fuel.svg" alt="" />
                    <h1 className='cap'>{car.cap}</h1>
                  </div>
                  <div className="group-2">
                    <img src="./imgs/shifter.svg" alt="" />
                    <h1 className='shift'>{car.shift}</h1>
                  </div>
                  <div className="group-3">
                    <img src="./imgs/cap.svg" alt="" />
                    <h1 className='person'>{car.person}</h1>
                  </div>
                </div>
                <div className="pr">
                  <h1 className='price'>${car.price}/<span>day</span></h1>
                  <button>Rent Now</button>
                </div>
            </div>
          );
        })
      }
        </div>
    </div>
  )
}

export default Down