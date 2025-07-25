import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohorts }) => {
  return (
    <>
      {cohorts.map((cohort, index) => (
        <div key={index} className={styles.box}>
          <h2>{cohort.name}</h2>
          <dl>
            <dt>Started On:</dt>
            <dd>{cohort.startDate}</dd>

            <dt>Current Status:</dt>
            <dd>
              <h3 style={{ color: cohort.status === 'Ongoing' ? 'green' : 'blue' }}>
                {cohort.status}
              </h3>
            </dd>

            <dt>Coach:</dt>
            <dd>{cohort.coach}</dd>

            <dt>Trainer:</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </>
  );
};

export default CohortDetails;