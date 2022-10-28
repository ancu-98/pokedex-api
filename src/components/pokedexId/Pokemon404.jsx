import React from 'react'
import { Link } from 'react-router-dom'

export const Pokemon404 = () => {
    return (
        <>
            <h1>Pokemon not found 💥 </h1>
            <Link to='/pokedex'>Return to Pokedex</Link>
        </>
    )
}
