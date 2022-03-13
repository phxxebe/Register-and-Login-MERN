import './App.css';
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";

function App() {

  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router> */}

      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
