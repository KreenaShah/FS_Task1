import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Home from './components/Home/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/signUp" element = {<SignUp />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



