import { Routes, Route } from 'react-router-dom';
import CreateAccount from "./pages/CreateAccount";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import ErrorBoundary from './pages/ErrorBoundary'; // import it
import Login from './pages/Login';

function App() {
  return (
    <div>
      <NavBar className="fixed-top" />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
