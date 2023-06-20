import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/shared/Header'
import './style/pokeInfo.css'

const PokeInfo = () => {

  const { id } = useParams()

  const [hasError, setHasError] = useState(false)
  const [poke, setPoke] = useState()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
    .then(res => {
      setPoke(res.data)
      setHasError(false)
    })
    .catch(err=>{
      setHasError(true)
      console.log(err)
    })
  }, [id])
  
  if(hasError){
    return <div className='has_error'>
      <h1 className='error_title'>❌The Pokemon with name '{id}' not fount ❌</h1>
      <img className='error_img' src={'https://albumizr.com/ia/1ed9b43268630800c68703b7473652a8.jpg'} alt="" />
    </div> 
    
    
  }else{
    return (
      <div className="poke">
        <Header />
        <div className='poke_info'>
          <div className={`poke_heard bg-${poke?.types[0].type.name}`} ></div>
          <img className='info_img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
          <h2 className={`info_order color-${poke?.types[0].type.name}`}>#{poke?.order}</h2>
          <h1 className={`info_title color-${poke?.types[0].type.name}`}>{poke?.name}</h1>
          
          <div className='poke_measure'>
            <h3 className='measure'>Weight<span>{poke?.weight}</span></h3>
            <h3 className='measure'>Height<span>{poke?.height}</span></h3>
          
          </div>
          <div className='poke_header'>
            <div>
              <h3 className='poke_type-name'>Type</h3>
              <ul className='poke_type'>
              {
                poke?.types.map(type =>(
                  <li className={`poke_type-iten bg-${poke?.types[0].type.name}`} key={type.type.name}> {type.type.name}</li>
                ))
              }
              </ul>
            </div>
            <div>
              <h3 className='poke_type-name'>Abilities</h3>
              <ul className='poke_type'>
              {
                poke?.abilities.map(abilitie =>(
                    <li className='poke_type-iten iten_color'>{abilitie.ability.name}</li>
              ))
              }
              
            </ul>
            </div>
            
          </div>
        <div className='card_stat'>
          <h2 className='stat_title'>Stats</h2>
          <ul>
          {
            poke?.stats.map(stat =>(
              <div className='stat'>
                <li className='stat-list' key={stat.stat.url}>
                <span className='stat_span_name'>{stat.stat.name}</span>
                <span className='stat_span_stat'>{stat.base_stat} /150</span>
              </li>
              <div className="table">
                <div className={`table_div  bg-${poke?.types[0].type.name}`} style={{width:`${stat.base_stat * 0.7}%`}}>
                {stat.base_stat}
                </div>
              </div>
              </div> 
            ))
          }
          </ul>
        </div> 
        
        </div>
        <div className="poke_movements">
          <h2 className='movements_title'>Movements</h2>
          <ul className="move_list">
            {
              poke?.moves.map(move => (
                <li className="movements_list" key={move.move.url}>
                  {move.move.name}
                </li>
              ))
            }
          </ul>
            

        </div>
      </div>
      

    )
  }

  
}

export default PokeInfo