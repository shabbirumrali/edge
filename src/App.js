import './App.scss';
import { Nav } from './components';
import { Login, Singup, Home, Profile } from './pages';
import { BoardUser, BoardAdmin } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Singup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='user' element={<BoardUser />} />
        <Route path='admin' element={<BoardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
