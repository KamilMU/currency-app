import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styles from './CurrencyConverter.module.scss';

function CurrencyConverter({ currencies, currencyName }) {
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState('');
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState('');
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');

  function convertCurrency() {
    console.log(firstInputValue, 'fff')

    setSecondInputValue(currencies.filter(currency => {
      return firstInputValue * currency.Value * currency.Nominal
    }
    ))
  }

  //   if (firstInputValue.length) {
  //     currencies.filter(currency => {
  //       setSecondInputValue(firstInputValue * currency.Value * currency.Nominal);
  //     })
  //   } else {

  //   }
  // }

  return (
    <div className={styles.container}>
      <div className={styles.currencyContainer}>
        <div>
          {firstSelectedCurrency ? currencies.map((currency, index) => {
            if (currency.CharCode === firstSelectedCurrency) {
              return (<div key={index}>{currency.Name}</div>)
            }
          }) : (<div>{currencies.length && currencies[0].Name}</div>)}

        </div>
        <div className={styles.currencyContainer__bottomRow}>
          <select
            onChange={e => setFirstSelectedCurrency(e.target.value)}>
            {currencies.map((currency, index) => (
              <option
                key={index}
                value={currency.CharCode}>
                {currency.CharCode}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={firstInputValue}
            onChange={e => {

                setFirstInputValue(e.target.value);
                console.log(firstInputValue, 'fff')


              if (firstInputValue.length) {
                currencies.filter(currency => {
                  console.log(secondInputValue)
                  setSecondInputValue(firstInputValue * currency.Value * currency.Nominal)
                })} else if (!firstInputValue.length && secondInputValue.length) {
                setSecondInputValue(0)
              }

            }}
          />
        </div>
      </div>

      <button>&#10231;</button>

      <div className={styles.currencyContainer}>
        <div>
          {secondSelectedCurrency ? currencies.map((currency, index) => {
            if (currency.CharCode === secondSelectedCurrency) {
              return (<div key={index}>{currency.Name}</div>)
            }
          }) : (<div>{currencies.length && currencies[0].Name}</div>)}

        </div>
        <div className={styles.currencyContainer__bottomRow}>
          <select
            onChange={e => setSecondSelectedCurrency(e.target.value)}>
            {currencies.map((currency, index) => (
              <option
                key={index}
                value={currency.CharCode}>
                {currency.CharCode}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={secondInputValue}
            readOnly
            onChange={e => {
              setSecondInputValue(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies.currencies,
    currencyName: state.currencies.currencies.map((currency, index) => currency.Name),
    currencyCharCode: state.currencies.currencies.map(currency => currency.CharCode),
  }
}

export default connect(mapStateToProps)(withRouter(CurrencyConverter));
