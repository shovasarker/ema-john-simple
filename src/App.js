import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Inventory from './components/Inventory'
import Orders from './components/Orders'
import Shop from './components/Shop'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
    </div>
  )
}

export default App
