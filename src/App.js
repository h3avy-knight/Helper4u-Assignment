import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAcount from './Components/CreateAcount';

function App() {
  return (
    <div className='full-screen-container'>
      <Router>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/create-acount' element={<CreateAcount />} />
          <Route path='*' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
