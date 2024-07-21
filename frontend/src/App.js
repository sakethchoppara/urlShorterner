import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mapper from './Pages/Mapper/Mapper';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:id' element={<Mapper/>} />
      </Routes>
    </div>
  );
}

export default App;
