import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/AboutPage/About';
import Navbar from './Pages/Shered/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>

    </div>
  );
}

export default App;
