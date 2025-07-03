import React, { useContext } from 'react';
import { QuoteContext } from './context/QuoteContext';
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
  const { quote, fetchQuote, loading, error, tags } = useContext(QuoteContext);

  return (
    <div className="app-container">
      <h1 className="app-title">Quotify 💬</h1>
      <QuoteCard quote={quote} loading={loading} error={error} />
      <button className="fetch-btn" onClick={() => fetchQuote()}>Fetch New Quote</button>
      <div className="tag-container">
      {
        tags.data && tags.data.map((tag) => {
          if(tag.quoteCount)
            return <button className="tag-btn" onClick={() => fetchQuote(tag.slug)} key={tag.id}>{tag.name}</button>;
          else return '';
        })
      }
      </div>
    </div>
  );
}

export default App;