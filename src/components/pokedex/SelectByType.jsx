import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const SelectByType = ({setTypeSelected}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        e.preventDefault()
        setTypeSelected(e.target.value)
    }

    return (
        <select onChange={handleChange} >
            <option value="All Pokemons">All Pokemons</option>
            {
                types?.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}
