import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import './style/home.css'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
  }

  return (
    <div className='home'>
      <img className='home_img' src="./images/image-11.png" alt="" />
      <h1 className='home_title'>¡Hi Trainer!</h1>
      <p className='home_p'>To start this pokedex, give me your name</p>
      <form className='home_form' onSubmit={handleSubmit}>
        <input className='home_form-input' id='name' type="text" />
        <button className='home_form-button'>Start</button>
      </form>
      <div className="header_home">
        <div className="home_black">
          <div className="home_circle">
            <div className="home_circle-int"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home