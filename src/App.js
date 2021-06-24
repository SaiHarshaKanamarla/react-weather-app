import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Accept from './Accept';
import Display from './Display';

function App() {
  return (
    <Router>
    <div className="App">
    <Accept />
      <Switch>
        <Route exact path='/create'>
          <Display />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
