import { useState } from 'react'
import Banner from '../../assets/signupbanner.png'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import './Singup.scss'

const Singup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // console.log(username, email, password)
    if(username==='' || email=== '' || password === '') {
      console.log('fields are empty')
      setError(true)
      setLoading(false)
      setTimeout(() => setError(false), 3000)
    } else {
      AuthService.register(username, email, password)
      setSuccessful(true)
      
      // .then((response) => {
      //   setSuccessful(true)
      //   setMessage(response.data.message)
      //   console.log(response.data.message)
      // }, (error) => {
      //   const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      //   console.log(resMessage)
      //   setSuccessful(false)
      //   setMessage(resMessage)
      // })
    }
  }
  return (
    <div className='signup__container'>
      <div className='signup__image'>
        <img src={Banner} alt='Signup page' />
      </div>
      <div className='signup__form'>
        {successful ? (
          <div className='signup__success'>
            <h1>Signup successful</h1>
            <br />
            <p className='text'>Authentication is not connect to backend as react CSR does not allow file system data file could not be updated,
              to login only use data file login credential
            </p>
            <br />
            <p className='signup__signup'>back to <Link to='/login'>Login</Link></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div className="signup__input-label">
              <label>
                <span>Username</span>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder='Enter your username' 
                />
              </label>
            </div>
            <div className="signup__input-label">
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
            <div className="signup__input-label">
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

            {message && <p>{message}</p> }

            <button type='submit' className='btn'>Signup</button>
            {error && <p className='error'>Email or password field should not be empty</p>}

            <p className='signup__signup'>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Singup