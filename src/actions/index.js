import axios from 'axios';

const GET_CURRENCIES = "GET_CURRENCIES";
const SEARCH_CURRENCY = "SEARCH_CURRENCY";

export const getCurrencies = () => async dispatch => {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

    console.log(response.data.Valute, 'resp')
    dispatch({ type: GET_CURRENCIES, payload: response.data.Valute })
}

export const searchCurrency = text => {
    return {
        type: SEARCH_CURRENCY,
        payload: text
    }
}