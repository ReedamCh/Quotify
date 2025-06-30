import React, { useContext } from 'react';
import { QuoteContext } from './context/QuoteContext';
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
  const { quote, fetchQuote, loading, error } = useContext(QuoteContext);

  return (
    <div className="app-container">
      <h1 className="app-title">Quotify 💬</h1>
      <QuoteCard quote={quote} loading={loading} error={error} />
      <button className="fetch-btn" onClick={fetchQuote}>Fetch New Quote</button>
    </div>
  );
}

export default App;