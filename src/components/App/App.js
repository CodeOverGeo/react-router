import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chips from '../Chip/chips';
import Cookies from '../Cookies/cookies';
import Soda from '../Soda/soda';
import VendingMachine from '../VendingMachine/VendingMachine';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/cookies">
            <Cookies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
