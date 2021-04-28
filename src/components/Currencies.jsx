import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCurrencies, searchCurrency } from '../actions/index';
import CurrencySearch from './CurrencySearch.jsx';
import ListOfCurrencies from './ListOfCurrencies.jsx';

function Currencies({ currencies, onGetCurrencies, onSearchCurrency }) {
  useEffect(() => {
    onGetCurrencies();
  }, []);

  return (
    <div>
      <CurrencySearch onSearchCurrency={onSearchCurrency} />
      <ListOfCurrencies currencies={currencies} />
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state.currencies, "state")
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Currencies));
