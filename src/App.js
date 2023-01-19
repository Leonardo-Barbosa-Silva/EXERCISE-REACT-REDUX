import './App.css';

import Intervalo  from './components/Intervalo';
import Soma  from './pages/Soma';
import Media  from './pages/Media';
import Sorteio  from './pages/Sorteio';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';



export default function App() {

  return (
    <Router>
      <div className="App">
        <div className='App-Header'> 
          <nav>
            <Link to='/soma' className='link'>
              <button type='button'>Sum</button>
            </Link>
            <Link to='/media' className='link'>
              <button type='button'>Average</button>
            </Link>
            <Link to='/sorteio' className='link'>
              <button type='button'>Random</button>
            </Link>
          </nav>
          <h1>Exercise React & Redux</h1>
        </div>
        <div className='line'>
          <Intervalo />
        </div>
        <div className='line'>
          <Routes>
            <Route path="/soma" element={<Soma />} />
            <Route path="/media" element={<Media />} />
            <Route path="/sorteio" element={<Sorteio />} />
            <Route path="/" element={<Navigate to="/soma" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};