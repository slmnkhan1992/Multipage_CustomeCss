import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Products from './Page/Products';
import Contact from './Page/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
