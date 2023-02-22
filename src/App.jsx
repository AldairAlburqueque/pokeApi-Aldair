import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'

function App() {
  
  
  // console.log({nameTrainer});
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokeInfo />}/>
        </Route>
      </Routes>
      {/* <h1>Pokedex</h1> */}
    </div>
  )
}

export default App
