import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
//import About from './components/About'
//import Contact from './components/Contact'
//import Portfolio from './components/Portfolio'
//import Dashboard from './components/Dashboard'
import './App.scss'
import Layout from './components/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path='Projects' element={<Projects/>}/>

        <Route path='Contact' element={<Contact/>}/>

  </Route>
      </Routes>
    </>
  )
}

export default App