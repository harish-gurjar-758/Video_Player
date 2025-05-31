import { Routes, Route } from 'react-router-dom';
import CreateAccount from "./pages/CreateAccount";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';

function App() {
  return (
    <div >
      <NavBar className="fixed-top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
