import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrencyConverter.module.scss';
import CurrencyRow from './CurrencyRow.jsx';

function CurrencyConverter({ currencies }) {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    currencies.length && setCurrencyOptions(currencies.map(currency => {
      return currency.CharCode
    }))
    setFromCurrency(currencyOptions[0])
    setToCurrency(currencyOptions[1])
    setExchangeRate(currencies.length && currencies.filter(cur => cur[fromCurrency]).map(cur => cur.Value).Value)
  }, [currencies, currencyOptions.length])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      function exchange(currentCurrency) {
        return (currencies.length && currencies).filter(currency => {
          return currency.CharCode === currentCurrency
        }).map(e => e.Value)[0]
      }

      if (fromCurrency) {
        setExchangeRate(exchange(fromCurrency))
      } else {
        setExchangeRate(exchange(toCurrency))
      }
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div
      style={{ flexDirection: isButtonClicked ? 'row-reverse' : '' }}
      className={styles.container}>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        currencies={currencies}
        isRight={() => {
          if (!isButtonClicked) {
            return false
          } else {
            return true
          }
        }}
        amount={fromAmount}
      />
      <button
        className="equals"
        onClick={() => {
          setIsButtonClicked(!isButtonClicked);
        }}>
        &#10231;
      </button>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        currencies={currencies}
        isRight={() => {
          if (!isButtonClicked) {
            return true
          } else {
            return false
          }
        }}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
}

export default withRouter(CurrencyConverter);
