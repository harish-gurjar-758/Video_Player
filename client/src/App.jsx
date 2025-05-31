import { Routes, Route } from 'react-router-dom';
import CreateAccount from "./pages/CreateAccount";
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div >
      <NavBar className="fixed-top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
