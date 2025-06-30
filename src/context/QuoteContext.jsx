import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (err) {
      setError('Could not fetch quote.');
    } finally {
      setLoading(false);
    }
  };
  console.log('QUOTE- ', quote);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuoteContext.Provider value={{ quote, fetchQuote, loading, error }}>
      {children}
    </QuoteContext.Provider>
  );
};
