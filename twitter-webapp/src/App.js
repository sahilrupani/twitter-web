import logo from './logo.svg';
import './App.css';
// import Routes from './Hoc/Routes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Router>
          <div className="app__body">
          
            <Switch>
              <Route path="/login">
                  <Login />
              </Route>

              <Route path="/home">
                  <Sidebar />
                  <Feed />
              </Route>
            </Switch>
          </div>
           
        </Router>
    </div>
  );
}

export default App;
