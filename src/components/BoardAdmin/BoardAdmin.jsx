import { useState, useEffect } from 'react'
import UserServices from '../../services/user.service'
import './BoardAdmin.scss'
import { AdminData } from '../../data/AdminData'

const BoardAdmin = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserServices.getAdminBoard().then((response) => {
      setContent(response.data)
    }, (error) => {
      const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      setContent(_content)
    })
  }, [])
  return (
    <div className='admin__container'>
      <h3>Admin Board</h3>
      <div className="admin__cards">
        {AdminData.map((user) => (
          <div className="admin__card" key={user.user_id}>
            <p>Total Assets: <span>{user.totalAssets}</span></p>
            <p>Liabilities: <span>{user.liabilities}</span></p>
            <p>High Networth Transactions: <span>{user.highNetworthTransactions}</span></p>
            <p>Events: <span>{user.events}</span></p>
            <p>
              Alerts
            {user.alerts.map(alert => (
              <span>{alert}</span>
              ))}
            </p>
              <p>Other Banking Resources:
                <i>Bank Code</i> 
                <span>{user.otherBankingResources.BankCode}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardAdmin