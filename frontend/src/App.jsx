import { useState } from 'react'
import './index.css'
import Navbar from './components/navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AppRoutes/>
    </>
  )
}

export default App
