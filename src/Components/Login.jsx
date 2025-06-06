import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'
import { Link } from 'react-router-dom'

const Login = () => {

    const context = useContext(MyContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    useEffect(() => {
        context.setIsSignIn(true);
    }, [])

    const changeInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const changeInputPassword = (e) => {
        setPassword(e.target.value)
    }

    const onLoginButton = () => {
        let data = localStorage.getItem('userData');
        if (data) {
            let parsedData = JSON.parse(data)

            if (parsedData.email === email && parsedData.password === password) {
                alert('valid email and password')
            } else {
                alert("Invalid Email or password")
            }
        } else {
            alert("No userData Found")
        }

        setEmail('');
        setPassword('')

    }

    return (
        <div className='main-container'>
            <div className='container'>
                <h1 className='heading'>SignIn to your <br /> PopX account</h1>
                <p className='paragraph'>Lorem ipsum dolor sit amet.</p>
                <p className='paragraph'>consectetur adipiscing elit.</p>
                <div className='input-container'>
                    <label>Email Address<span>*</span></label>
                    <input type='text' value={email} className='input' placeholder='Enter email address'
                        onChange={changeInputEmail} />
                </div>
                <div className='input-container'>
                    <label>Password<span>*</span></label>
                    <input type='text' value={password} className='input' placeholder='enter password'
                        onChange={changeInputPassword} />
                </div>
                <button className='button log' onClick={onLoginButton}>Login</button>
            </div>
        </div>
    )
}

export default Login