import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import Ledger from './components/Ledger'
import TransactionPage from './components/TransactionPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* temporary */}
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/student' element={<StudentDashboard/>}/>
      <Route path='/ledger' element={<Ledger/>}/>
      <Route path='/Transaction' element={<TransactionPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
