import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div>
        {options.map(element => (
          <button
            key={element}
            type="button"
            onClick={onLeaveFeedback}
            styles={{ marginRight: '10px' }}
          >
            {element}
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
