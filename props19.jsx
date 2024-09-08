import React from 'react';
import PropTypes from 'prop-types';

function JobCard({ jobTitle, companyName, location }) {
  return (
    <div className="job-card">
      <h2>{jobTitle}</h2>
      <h3>{companyName}</h3>
      <p>{location}</p>
    </div>
  );
}

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default JobCard;
