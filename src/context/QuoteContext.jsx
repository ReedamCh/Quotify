import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState({});
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async (tag) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.quotable.io/random${tag ? `?tags=${tag}` : ''}`);
      setQuote(response.data);
    } catch (err) {
      setError('Could not fetch quote.');
    } finally {
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/tags');
      setTags(response);
    } catch (err) {
      setError('could not fetch tags.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
    fetchTags();
  }, []);

  return (
    <QuoteContext.Provider value={{ quote, fetchQuote, loading, error, tags, fetchTags }}>
      {children}
    </QuoteContext.Provider>
  );
};
