import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageWrapper from './components/PageWrapper/PageWrapper'
import Home from './components/Home/Home'
import Bio from './components/Bio/Bio'
import Credits from './components/Credits/Credits'
import Contact from './components/Contact/Contact'
import './App.css'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const [contactModalVisible, setContactModalVisible] = useState(false)
  const [portfolioVisible, setPortfolioVisible] = useState(false)

  const toggleContactModal = () => {
    setContactModalVisible(!contactModalVisible)
  }

  const togglePortfolio = () => {
    setPortfolioVisible(!portfolioVisible)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<PageWrapper toggleContactModal={toggleContactModal} togglePortfolio={togglePortfolio} />}>
          <Route index element={<Home toggleContactModal={toggleContactModal} togglePortfolio={togglePortfolio} />} />
          <Route path='bio' element={<Bio />} />
          <Route path='credits' element={<Credits />} />
        </Route>
      </Routes>
      <Contact isVisible={contactModalVisible} toggleModal={toggleContactModal} />
      <Portfolio isVisible={portfolioVisible} toggleModal={togglePortfolio} />
    </>
  )
}

export default App
