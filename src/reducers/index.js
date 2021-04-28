import { combineReducers } from 'redux';
import { currenciesReducer } from './CurrenciesReducer.js';

export const allReducers = combineReducers({
    currencies: currenciesReducer
})
