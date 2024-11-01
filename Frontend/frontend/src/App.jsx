// import CountryList from "./components/CountryList"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Info from './components/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  
  )
}

export default App
