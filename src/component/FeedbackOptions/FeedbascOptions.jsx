import PropTypes from "prop-types";

const FeedbackOptions = ({ objOptions, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(objOptions).map((elem) => (
        <button key={elem} onClick={()=>onLeaveFeedback(elem)}>
          {elem}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  objOptions: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;