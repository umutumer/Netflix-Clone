import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Components/Login';
import FilmDetail from './Pages/FilmDetail';
import MovieDetail from './Pages/MovieDetail';
import Films from './Pages/Films';
import Movies from './Pages/Movies';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/film/detail/:id' element={<FilmDetail />}></Route>
      <Route path='/movie/detail/:id' element={<MovieDetail />}></Route>
      <Route path='/films' element={<Films />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
