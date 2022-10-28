import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/trainerName.slice.js'

const FormHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = event => {
        event.preventDefault()
        dispatch(setUserNameGlobal(event.target.firstChild.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form onSubmit={submit} className='pokedex--form'>
            <input
                className='pokedex--input'
                type="text"
                placeholder='Enter your name here.'
            />
            <button className='pokedex--btn'> Catch them all! </button>
        </form>
    )
}

export default FormHome