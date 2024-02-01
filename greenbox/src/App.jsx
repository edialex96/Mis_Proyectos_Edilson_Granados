import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Perfil } from './pages/perfil'
import { useState } from 'react'
import {ProtectedRoute} from'./components/ProtectedRoute'
import { Login } from './pages/Login'


const App = () => {

  const [user, setUser] = useState(null)

  const login = () => {
    //request done
    setUser({
      id:1,
      name:'JoHn'
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>

    
      <Routes>
        <Route index  element={<Landing/>}/>
        <Route path="/landing"  element={<Landing />}/>
        <Route element ={<ProtectedRoute user={user}/>}>
        <Route path="/home"  element={<Home  />}/> 
        <Route path="/dashboard"  element={<Dashboard  />}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App