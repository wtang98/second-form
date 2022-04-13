import React from 'react'
import './input.scss'
const Input = ({label, handleInput, error, errorCy, errorType, cypressData}) => {
    return (
        <div className='input'>
            <div>
                <label htmlFor="ss">{label}</label>
                {error && <p data-cy={errorCy}>{errorType}</p>}
            </div>
            <input type="text" onChange={handleInput} data-cy={cypressData}/>
        </div>
    )
}

export default Input