import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage} from './pages/HomePage'
import { PhrasalVerbsPage } from './pages/PhrasalVerbsPage'
import { AuxiliaryContractionsPage } from './pages/AuxiliaryContractionsPage'
import { InformalContractionsPage } from './pages/InformalContractionsPage'

function App() {
  const hideNavbar = (event) => {
    const parent1 = event.target.parentElement
    const parent2 = event.target.parentElement.parentElement
    const classNames = ['nav-btn', 'nav-container', 'nav-btn-bars']
    if (!classNames.some(className => parent2.classList.contains(className)) && !classNames.some(className => parent1.classList.contains(className))) {
      document.getElementsByTagName("nav")[0].classList.remove("responsive");
    }
  }
  return (
    <div className='main-container' onClick={hideNavbar}>
      <HashRouter>
        <Navigation />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/phrasalverbs' element={<PhrasalVerbsPage />} />
            <Route path='/auxcontractions' element={<AuxiliaryContractionsPage />} />
            <Route path='/infcontractions' element={<InformalContractionsPage />} />
          </Routes>
        </div>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
