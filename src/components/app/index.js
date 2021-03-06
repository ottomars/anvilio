import './index.css'
import Feeds from '../feeds'
import Header from '../header'
import Logo from '../logo'
import Nav from '../nav'
import React from 'react'
import Search from '../search'
import UserActions from '../user-actions'
import Footer from '../footer'

const App = () => (
  <div className='App'>
    <Header>
      <Logo />
      <Nav />
      <Search />
      <UserActions />
    </Header>
    <Feeds />
    <Footer />
  </div>
)

export default App
