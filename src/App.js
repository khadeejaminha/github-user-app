import logo from './logo.svg';
import './App.css';
import Adduser from './Components/Adduser';
import Searchuser from './Components/Searchuser';
import Deleteuser from './Components/Deleteuser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewuser from './Components/Viewuser';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Adduser/>}/>
  <Route path='/search' element={<Searchuser/>}/>
  <Route path='/delete' element={<Deleteuser/>}/>
  <Route path='/view' element={<Viewuser/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
