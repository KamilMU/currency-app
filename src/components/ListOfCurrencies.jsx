import React from 'react';
import styles from './ListOfCurrencies.module.scss';

function ListOfCurrencies({ currencies }) {
  return (
    <ul>{currencies && currencies.map((currency, index) => (
      <li key={index} className={styles.currency}>
        <div className={styles.currency__name}>{currency.Name}</div>
        <div className={styles.currency__row}>
          <div className={styles.currency__rowLeft}>
            <div>{currency.CharCode}</div>
            <span>&#10231;</span>
            <div>{currency.Value}</div>
          </div>
          <div className={styles.currency__rowRight}>
            <div
              className={currency.Value < currency.Previous ? styles.red : styles.green}>
              {currency.Value < currency.Previous ? (
                currency.Previous - currency.Value).toFixed(4) : (
                  currency.Value - currency.Previous).toFixed(4)}
            </div>
          </div>
        </div>
      </li>
    ))}
    </ul>
  )
}

export default ListOfCurrencies;
