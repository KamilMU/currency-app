import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import styles from './CurrencyConverter.module.scss';
import CurrencyRow from './CurrencyRow.jsx';

function CurrencyConverter({ currencies }) {
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [fromCurrencyOptionChanged, setFromCurrencyOptionChanged] = useState(false);

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    setFromCurrency(currencies.map(c => c.CharCode)[0])
    setToCurrency(currencies.map(c => c.CharCode)[1])
    setExchangeRate(currencies.length && (
      currencies[0].Value))
  }, [currencies])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      setExchangeRate(currencies.length && (
        (currencies)
          .filter(currency => {
            if (fromCurrencyOptionChanged) {
              return (currency.CharCode === fromCurrency)
            } else {
              return (currency.CharCode === toCurrency)
            }
          }).map(e => e.Value)[0]))
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
      style={{
        flexDirection: isButtonClicked ? 'row-reverse' : ''
      }}
      className={styles.container}>
      <CurrencyRow
        currencyOptions={() => currencies.map(c => c.CharCode)}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => { setFromCurrency(e.target.value); setFromCurrencyOptionChanged(true) }}
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
        currencyOptions={() => currencies.map(c => c.CharCode)}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => { setToCurrency(e.target.value); setFromCurrencyOptionChanged(false) }}
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
