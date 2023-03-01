import './App.css';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div className='navBar'>
        <Navbar/>
      </div>
      <div className='LoginPage'>
        <LoginPage/>
      </div>
    </>
  );
}

export default App;
