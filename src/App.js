// import Materi from './example'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return(
    <>
    {/* <Materi/> */}
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
    </>
  )
}


export default App