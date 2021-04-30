import React, { useEffect } from 'react';
import styles from './CurrencyRow.module.scss';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    isRight,
    amount,
    currencies
  } = props

  console.log(isRight(), 'rrrr')
  return (
    <div className={styles.currencyContainer}>
      <div className={styles.currencyContainer__name}>
        {currencies.length && selectedCurrency ? (
          currencies
            .filter(e => e.CharCode === selectedCurrency)
            .map(currency => currency.Name)
        ) : (currencies.length && (
          currencies
            .filter(cur => cur.CharCode === selectedCurrency)
            .map(cur => cur.Name)[0]
        ))}
      </div>

      <div className={styles.currencyContainer__bottomRow}>
        <input
          type="number"
          className="input"
          value={amount ? amount : ''}
          readOnly={isRight() && "readonly"}
          onChange={onChangeAmount}
        />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.length && currencyOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  )
}