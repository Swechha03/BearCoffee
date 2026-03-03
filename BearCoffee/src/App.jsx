import { Routes, Route } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {Order} from './pages/Order'
import {FAQ} from './pages/FAQ'
import {AboutUs} from './pages/AboutUs'
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='/order' element={<Order />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/faq' element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
