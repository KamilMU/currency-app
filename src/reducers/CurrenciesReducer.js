const initialState = {
  currencies: [],
  oldCurrencies: [],
}

export const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENCIES':
      return {
        ...state,
        currencies: [...state.currencies, ...Object.values(action.payload)],
        oldCurrencies: [...state.oldCurrencies, ...Object.values(action.payload)]
      }

    case 'SEARCH_CURRENCY':
      if (action.payload.length > 0) {
        return {
          ...state,
          currencies: state.currencies.filter(currency => {
            return currency.Name.toLowerCase().includes(action.payload.toLowerCase());
          })
        }
      } else {
        return {
          ...state,
          currencies: [...state.currencies, ...state.oldCurrencies]
        }
      }
    default:
      return state;
  }

}