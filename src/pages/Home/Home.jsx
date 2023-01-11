import React from 'react'
import './Home.scss'
import Bank from '../../assets/banks.jpg'

const Home = () => {
  return (
    <div className='home__container'>
      <div className="home__page">
        <div className="home__image">
          <img src={Bank} alt="Header Image" />
        </div>
        <div className="home__content">
          <h1>Hello :)</h1>
          <p>Welcome to the Edge of the new World</p>
          <p>This web application is designed using react components</p>

          <h4>Steps to run application</h4>
          <ul>
            <li>Dawnload application from <code>@shabbirumrali</code> github repo</li>
            <li>Open zip folder on your specified location and make sure that node is install in your machine</li>
            <li>Once folder is unzipped open a command terminal and run <code>npm install</code> to install all the required packages </li>
            <li>On successfull installation of node_modules start server using <code>npm start</code></li>
          </ul>

          <h4>Check the build version of the application <a href="https://clinquant-sable-d25595.netlify.app/">Here</a>.</h4>
        </div>
      </div>
    </div>
  )
}

export default Home