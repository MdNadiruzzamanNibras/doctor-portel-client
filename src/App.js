import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/AboutPage/About';
import Navbar from './Pages/Shered/Navbar/Navbar';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={
         <RequireAuth>
           <Appoinment></Appoinment>
         </RequireAuth>
       }></Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
