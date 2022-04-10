import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Inventory from './components/Inventory'
import Login from './components/Login'
import Orders from './components/Orders'
import RequireAuth from './components/RequireAuth'
import Shipment from './components/Shipment'
import Shop from './components/Shop'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route
          path='/inventory'
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path='/shipment'
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
