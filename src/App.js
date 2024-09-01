
import { Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './Layout/AppLayout';
import Homepage from './Pages/HomePage/Homepage';
import MoviePage from './Pages/Movies/MoviePage';
import MovieDetailPage from './Pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>

        <Route path='movies'>
          <Route index element={<MoviePage/>}/>
          <Route path=':id' element={<MovieDetailPage/>}/>
        </Route> 
        
      </Route>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
