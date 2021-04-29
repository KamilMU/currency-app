import React from 'react';
import { withRouter } from 'react-router';
import CurrencySearch from './CurrencySearch.jsx';
import ListOfCurrencies from './ListOfCurrencies.jsx';

function Currencies({ currencies, onSearchCurrency }) {
  return (
    <div>
      <CurrencySearch onSearchCurrency={onSearchCurrency} />
      <ListOfCurrencies currencies={currencies} />
    </div>
  )
}


export default withRouter(Currencies);
