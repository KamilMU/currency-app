import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function CurrencyConverter({ currencies }) {
  return (
    <div>
      {currencies.map(currency => (
        <div>
          <div>{currency.Name}</div>
          <div>
            <select name="" id="">
              <option value="">{currency.CharCode}</option>
            </select>
            <input type="text" />
          </div>
        </div>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currencies: state.currencies.currencies
  }
}

export default connect(mapStateToProps)(withRouter(CurrencyConverter));
