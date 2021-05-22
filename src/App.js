import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Rates from "./components/Rates";
import CurrencyRate from "./components/CurrencyRate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/rates">Rates</Link></li>
            <li><Link to="/exchange">Exchange</Link></li>
            <li><Link to="/exchange/EUR">Exchange Rate EUR</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/rates">
            <Rates />
          </Route>
          <Route path="/exchange">
            <CurrencyRate />
          </Route>
          <Route path="/exchange/:currency">
            <CurrencyRate />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
