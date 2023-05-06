import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageWrapper from './components/PageWrapper/PageWrapper'
import Home from './components/Home/Home'
import Bio from './components/Bio/Bio'
import Credits from './components/Credits/Credits'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  const [contactModalVisible, setContactModalVisible] = useState(false)
  const [portfolioVisible, setPortfolioVisible] = useState(false)

  const toggleContactModal = () => {
    setContactModalVisible(!contactModalVisible)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<PageWrapper toggleContactModal={toggleContactModal} />}>
          <Route index element={<Home toggleContactModal={toggleContactModal} />} />
          <Route path='bio' element={<Bio />} />
          <Route path='credits' element={<Credits />} />
        </Route>
      </Routes>
      <Contact isVisible={contactModalVisible} toggleModal={toggleContactModal} />
    </>
  )
}

export default App
