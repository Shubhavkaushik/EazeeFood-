import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DummyPaymentGateway = () => {
    const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to simulate the payment process
    // For the purpose of this example, we'll just set the isPaid state to true
    setIsPaid(true);
  };

  const handleAnimationEnd = () => {
    setIsPaid(false); // Reset the isPaid state to allow for another payment
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {isPaid ? (
        <div
          style={{
            fontSize: '24px',
            color: 'green',
            animation: 'paymentSuccess 2s',
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          Payment Successful!
          {setTimeout(() => {
            navigate('/')
          }, 2000)} 
          
        </div >
      ) : (
        <form onSubmit={handlePaymentSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#17a2b8',
              color: '#fff',
              border: 'none',
              transition: 'background-color 0.3s ease-in-out',
            }}
          >
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default DummyPaymentGateway;
