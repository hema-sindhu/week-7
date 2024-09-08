import React from 'react';
import PropTypes from 'prop-types';

function ArticleCard({ headline, summary, source }) {
  return (
    <div>
      <h2>{headline}</h2>
      <p>{summary}</p>
      <p><strong>Source:</strong> {source}</p>
    </div>
  );
}

ArticleCard.propTypes = {
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ArticleCard;
