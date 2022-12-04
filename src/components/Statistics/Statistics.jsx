import PropTypes from 'prop-types';
import { capitalizeWord } from 'utils';

export default function Statistics({ stats, total, positivePersentage }) {
  return (
    <>
      {Object.entries(stats).map(([name, value]) => (
        <p key={name}>
          {capitalizeWord(name)}: {value}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive: {positivePersentage}%</p>
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
