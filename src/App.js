import TopBar from './components/TopBar/TopBar';
import Home from './pages/homepage/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Home />} />
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Home /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
