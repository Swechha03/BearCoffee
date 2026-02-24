import { Routes, Route } from 'react-router'
import {HomePage} from './components/HomePage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
