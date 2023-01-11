import { useEffect, useState } from 'react'
import './BoardUser.scss'
import UserServices from '../../services/user.service'
import { userData } from '../../data/UserData'

const BoardUser = () => {
    const [content, setContent] = useState('')

    useEffect(() => {
        UserServices.getUserBoard().then((response) => {
            setContent(response.data)
        }, (error) => {
            const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setContent(_content)
        })
    }, [])
  return (
    <div className='boarduser__container'>
        <div className="boardsuser__card">
            <h1>BoardUser</h1>
            <p>User content state here</p><br />

            <p>Bank Name: <span>{userData.bankName}</span></p>
            <p>Bank Code: <span>{userData.bankCode}</span></p>
            <p>Bank Total Networth: <span>{userData.totalNeworth}</span></p>
            <p>User Balance Summary: <span>{userData.balanceSummary}</span></p>
            <p>Income: <span>{userData.income}</span></p>
            <p>Expenses: <span>{userData.expenses}</span></p>
            <p>Credit Cards: <span>{userData.creditCards ? 'credit card available' : 'No credit card found'}</span></p>
            <p>Loans: <span>{userData.loans ? 'Current Loan running' : 'No Loan found'}</span></p>
            <p>Recent Transactions: 
                {userData.recentTransactions.map(trans => (
                <span key={trans}>- {trans}</span>
                ))}
            </p>
        </div>

    </div>
  )
}

export default BoardUser