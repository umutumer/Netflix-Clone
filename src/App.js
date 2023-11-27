import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Detail from './Pages/Detail';
import Films from './Pages/Films';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
      <Route path='/films' element={<Films />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
