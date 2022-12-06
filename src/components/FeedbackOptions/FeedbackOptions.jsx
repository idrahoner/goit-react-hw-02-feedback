import PropTypes from 'prop-types';
import { capitalizeString } from 'utils';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div>
        {options.map(element => (
          <button
            key={element}
            type="button"
            onClick={onLeaveFeedback}
            style={{
              display: 'inline-block',
              marginRight: '10px',
            }}
          >
            {capitalizeString(element)}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};
