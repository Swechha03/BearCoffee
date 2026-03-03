import { Routes, Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import {Order} from './pages/Order'
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='/Order' element={<Order />} />
      </Routes>
    </>
  )
}

export default App
