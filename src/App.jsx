import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Currencies from './components/Currencies.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';
import { connect } from 'react-redux';
import { getCurrencies, searchCurrency } from './actions/index';

function App({ currencies, onSearchCurrency, onGetCurrencies }) {
  useEffect(() => {
    onGetCurrencies();
  }, []);

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
              currencies={currencies}
              onSearchCurrency={onSearchCurrency}
              onGetCurrencies={onGetCurrencies}
            />
          )}
        />
        <Route
          exact
          path="/converter"
          render={() => (
            <CurrencyConverter
              currencies={currencies}
            />)}
        />
        <Route
          exact
          path="*"
          render={() => <div>Page doesnt exist</div>}
        />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies.currencies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetCurrencies: () => dispatch(getCurrencies()),
    onSearchCurrency: (text) => dispatch(searchCurrency(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
