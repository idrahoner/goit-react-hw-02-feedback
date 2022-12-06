import PropTypes from 'prop-types';
import { capitalizeString } from 'utils';

export default function Statistics({ stats, total, positivePersentage }) {
  return (
    <>
      {total ? (
        <div>
          {Object.entries(stats).map(([name, value]) => (
            <p key={name}>
              {capitalizeString(name)}: {value}
            </p>
          ))}
          <p>Total: {total}</p>
          <p>Positive: {positivePersentage}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
