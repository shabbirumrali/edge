import { useState, useEffect } from 'react'
import AuthService from '../../services/auth.service'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if(user) {
      setCurrentUser(user)
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"))
    }
  }, [])

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className='nav__container'>
        <div className='nav__logo'>
            <h1><NavLink to="/">Edge</NavLink></h1>
        </div>
        <ul className='nav__navbar'>
          { showAdminBoard && (
            <li> <NavLink to="admin">Admin Board</NavLink></li>
          )}

          { currentUser && (
            <li><NavLink to="/user">User Board</NavLink></li>
          )}

          { currentUser ? (
            <>
              <li>
                <NavLink to="/profile">
                  {currentUser.username}
                </NavLink>
              </li>
              <li>
                <a href='/login' onClick={logOut}>
                  Log out
                </a>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="login">Login</NavLink></li>
              <li><NavLink to="signup">Signup</NavLink></li>
            </>
          )}
        </ul>
    </div>
  )
}

export default Nav