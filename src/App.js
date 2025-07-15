import logo from './logo.svg';
import './App.css';
import Adduser from './Components/Adduser';
import Searchuser from './Components/Searchuser';
import Deleteuser from './Components/Deleteuser';

function App() {
  return (
    <div>
      <Adduser/>
      <Searchuser/>
      <Deleteuser/>
    </div>
  );
}

export default App;
