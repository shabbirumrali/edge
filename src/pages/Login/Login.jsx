import { useState } from 'react'
import Banner from '../../assets/loginbanner.png'
import AuthService from '../../services/auth.service'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    console.log(email, password)
    if(email === '' || password === '') {
      console.log('fields should not be empty empty')
      setError(true)
      setLoading(false)
      setTimeout(() => setError(false), 3000)
    } else {
      const authuser = AuthService.login(email, password)
      if(authuser) {
        navigate('/profile')
        window.location.reload()
      }
      
      // .then(() => {
      //   console.log('success')
      // }, (error) => {
      //   const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      //   setLoading(false)
      //   setMessage(resMessage)
      //   console.log(resMessage)
      // })
    }
  }
  return (
    <div className='login__container'>
      <div className='login__image'>
        <img src={Banner} alt='Login page' />
      </div>
      <div className='login__form'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="login__input-label">
            <label>
              <span>Email</span>
              <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter your email' 
              />
            </label>
          </div>
          <div className="login__input-label">
            <label>
              <span>Password</span>
              <input 
                type="password" 
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="login__forgot-password">
            <span>Forgot Password?</span>
          </div>

          <button type='submit' className='btn'>{loading ? 'loading...' : 'Login'}</button>
          {error && <p className='error'>Email or password field should not be empty</p>}

          <p className='login__signup'>Don't have account? <Link to='/signup'>Signup</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login