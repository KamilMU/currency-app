import React from 'react';
import styles from './CurrencySearch.module.scss';

function CurrencySearch({ onSearchCurrency }) {
  return (
    <div className={styles.searcContainer}>
      <input
        type="text"
        autoFocus
        onChange={e => {
          onSearchCurrency(e.target.value);
        }}
      />
    </div>
  )
}

export default CurrencySearch;
