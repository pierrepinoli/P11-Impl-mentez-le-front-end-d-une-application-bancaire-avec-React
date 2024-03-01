import React from 'react';

function Collapse(props) {
    const { accountTitle, accountAmount, accountDescription } = props;

    return (
        <section className="account">
            <div className="account-content-wrapper">
              <h4 className="account-title">{accountTitle}</h4>
              <p className="account-amount">{accountAmount}</p>
              <p className="account-amount-description">{accountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )                    
}

export default Collapse;