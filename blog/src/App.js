import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Error from './components/Error'
import Update from './components/Update'
import Index from './components/Index'
import Show from './components/Show'
import New from './components/New'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/:id" element={<Show/>} />
        <Route path="/:id/update" element={<Update/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*"  element={<Error/>}/> 
      </Routes>
    </Router>
  )
}
