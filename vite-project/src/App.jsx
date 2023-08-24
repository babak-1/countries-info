import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Countries from './components/countries/countries'
import ErrorPage from './pages/ErrorPage'
import InfoCountry from './pages/infoCountry/infoCountry'
import Header from './components/header/header'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Countries/>}/>
      <Route path='/:name' element={<InfoCountry/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
