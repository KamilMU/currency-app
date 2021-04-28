import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Currencies from './components/Currencies.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';
import axios from 'axios';

function App() {
  // const [currencies, setCurrencies] = useState([]);

  // useEffect(() => {
  //   async function getCurrencies() {
  //     const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

  //     const data = await Object.values(response.data.Valute);
  //     console.log(data);
  //     setCurrencies(data);
  //   }

  //   getCurrencies()
  // }, []);

  return (
    <div className={styles.app}>
      <div className={styles.tabs}>
        <Link to="/">Список валют</Link>
        <Link to="/converter">Конвертёр валют</Link>
      </div>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Currencies
            />
          )}
        />
        <Route
          exact
          path="/converter"
          component={CurrencyConverter} />
        <Route
          exact
          path="*"
          render={() => <div>Page doesnt exist</div>}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
