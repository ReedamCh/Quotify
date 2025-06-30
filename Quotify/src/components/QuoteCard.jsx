import React from 'react';

function QuoteCard({ quote, loading, error }) {
  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.content}"</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
}

export default QuoteCard;