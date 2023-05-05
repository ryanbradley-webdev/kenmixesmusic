import { Routes, Route } from 'react-router-dom'
import './App.css'
import PageWrapper from './components/PageWrapper/PageWrapper'
import Home from './components/Home/Home'
import Bio from './components/Bio/Bio'
import Credits from './components/Credits/Credits'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path='bio' element={<Bio />} />
        <Route path='credits' element={<Credits />} />
      </Route>
    </Routes>
  )
}

export default App
