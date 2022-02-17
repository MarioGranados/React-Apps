import Download from "./Pages/Download";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Switch>
        <Router exact path="/" >
          <Home/>
        </Router>
        <Route exact path="/Download">
          <Download/>
        </Route>
      </Switch>
      <Footer/>
    </Router>


  </>
  );
}

export default App;
