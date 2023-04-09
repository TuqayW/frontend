import React from 'react'
import '../styles/reset.css'
import Up from '../Components/up/up'
import Down from '../Components/down/down'
import Nav from '../Components/nav/nav'
import Foot from '../Components/footer/foot'

const MainPage = () => {

  return (
    <div className='bumshakalaka'>
        <Nav/>
        <Up/>
        <Down/>
        <Foot/>
    </div>
  );
}

export default MainPage