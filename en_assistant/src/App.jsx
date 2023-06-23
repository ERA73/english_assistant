import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PhrasalVerbsPage } from './pages/phrasalVerbsPage'
import './styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/phrasalverbs' element={<PhrasalVerbsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
