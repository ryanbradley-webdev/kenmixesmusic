import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PageWrapper from './components/PageWrapper/PageWrapper'
import Home from './components/Home/Home'
import Bio from './components/Bio/Bio'
import Credits from './components/Credits/Credits'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'

function App() {
  const [contactModalVisible, setContactModalVisible] = useState(false)
  const [portfolioVisible, setPortfolioVisible] = useState(false)

  const location = useLocation()

  const toggleContactModal = () => {
    setContactModalVisible(!contactModalVisible)
  }

  const togglePortfolio = () => {
    setPortfolioVisible(!portfolioVisible)
  }

  useEffect(() => {
    const root = document.getElementById('root')

    if (location.pathname.includes('bio')) {
      if (root) root.style.backgroundColor = 'var(--color-bg-portfolio)'
    } else {
      if (root) root.style.backgroundColor = 'var(--color-bg)'
    }

  }, [location])

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
      <Portfolio isVisible={portfolioVisible} toggleModal={togglePortfolio} toggleContactModal={toggleContactModal} />
    </>
  )
}

export default App
