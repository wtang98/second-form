import React, {useState, useEffect} from 'react'
import './form.scss'
import Input from './inputs/input'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [firstError, setFirstError] = useState(null)
    const [secondName, setSecondName] = useState('')
    const [secondError, setSecondError] = useState(null)
    const [email, setEmail] = useState('')
    const [emailInvalid, setEmailInvalid] = useState(null)
    const [success, setSuccess] = useState(false)
    
    const handleFirstInput = (e) => {
        setFirstName(e.target.value)
    }
    const handleSecondInput = (e) => {
        setSecondName(e.target.value)
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const validateForm = (e) => {
        e.preventDefault();
        if(firstName.length<2){
            setFirstError(true)
        }else{
            setFirstError(false)
        }
        if(secondName.length<2){
            setSecondError(true)
        }else{
            setSecondError(false)
        }
        if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )){
            setEmailInvalid(false)
        }else{
            setEmailInvalid(true)
        }
        // if(firstError === false && secondError === false && emailInvalid === false){
        //     setSuccess(true)
        // }
        proceed()
    }

    const proceed = () => {
        if(firstError === false && secondError === false && emailInvalid === false){
            setSuccess(true)
        }
    }
    useEffect(proceed,[email, firstError, secondName])


    return (
        <div className='form'>
            {success ? <p data-cy='donezo'>Donezo</p> : <form data-cy='form' action="" onSubmit={validateForm}>
                <div className="name">
                    <Input data-cy='firstName' cypressData={'firstNameInput'} errorCy={'firstErrorCy'} label={'First Name'} handleInput={handleFirstInput} error={firstError} errorType={'*Required'}/>
                    <Input data-cy='LastName' cypressData={'secondNameInput'} errorCy={'secondErrorCy'} label={'Last Name'} handleInput={handleSecondInput} error={secondError} errorType={'*Required'}/>
                </div>
                <div className="email">
                    <Input data-cy='email' cypressData={'emailInput'} errorCy={'emailErrorCy'} label={'Email'} handleInput={handleEmailInput} error={emailInvalid} errorType={'*Invalid Email'}/>
                </div>
                <button data-cy='button' type='submit'>Submit</button>
            </form>}
        </div>
    )
}

export default Form