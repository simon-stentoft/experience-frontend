import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import CreateExperience from './pages/CreateExperience';
import About from './pages/About';
import Navbar from './components/Navbar';
/*import Login from './pages/Login';
import Register from './pages/Register';/*


/*
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            */


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateExperience />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
