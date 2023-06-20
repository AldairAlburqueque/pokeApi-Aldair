import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000);
  }, []);


    return (
        <div className="App">
          { loading ? (
            <div className='loading'>
              <img src={'./images/pikachu.png'} alt="" />
            </div>
            
          ) : (
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />}/>
              <Route path='/pokedex/:id' element={<PokeInfo />}/>
            </Route>
          </Routes>
          )
            
          }
      </div>
    )
  }


export default App
