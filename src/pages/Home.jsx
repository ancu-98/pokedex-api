import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
    return (
        <article className='pokedex'>
            <img className='pokedex--img' src="/images/home/home-pokedex.png" alt="" />
            <header className='pokedex--header' >
                <h2 className='pokedex--subtitle'>Hi Trainer!</h2>
                <p className='pokedex--text'>To Start... Give me your name</p>
            </header>
            <FormHome />
        </article>
    )
}

export default Home