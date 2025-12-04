import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import Clients from './components/Clients/Clients'
import Community from './components/Community/Community'
import Unlock from './components/Unlock/Unlock'
import Achievements from './components/Achievements/Achievements'
import Calender from './components/Calender/Calender'
import Customers from './components/Customers/Customers'
import CommuUpdates from './components/Community-Updates/commuUpdates'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <CommuUpdates/>
      <Footer/>
    </>
  )
}

export default App
