import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { Order } from './pages/Order'
import { FAQ } from './pages/FAQ'
import { AboutUs } from './pages/AboutUs'
import { Cart } from './pages/Cart'
import './App.css'

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItems,setCartItems]=useState([]);

  return (
    <>
      <Routes>
        <Route
          index element={
            <HomePage cartNumber={cartNumber} />
          }
        />
        <Route
          path='/order'
          element={<Order cartNumber={cartNumber} 
          setCartNumber={setCartNumber}
          cartItems={cartItems}
          setCartItems={setCartItems}
           />}
        />
        <Route
          path='/aboutUs'
          element={<AboutUs />}
        />
        <Route
          path='/faq'
          element={<FAQ />}
        />
        <Route
          path='/cart'
          element={<Cart cartNumber={cartNumber}
            setCartNumber={setCartNumber} 
             cartItems={cartItems}
          setCartItems={setCartItems}
          />
          }
        />
      </Routes>
    </>
  )
}

export default App
