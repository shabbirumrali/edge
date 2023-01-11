import React from 'react'
import './Profile.scss'
import AuthService from '../../services/auth.service'

const Profile = () => {
    const currentUser = AuthService.getCurrentUser()
    return (
        <div className='profile__container'>
            <div className="profile__card">
                <div className="profile__user-info">
                    <p>User: <span>{currentUser.username}</span></p>
                    <p>Email: <span>{currentUser.email}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Profile