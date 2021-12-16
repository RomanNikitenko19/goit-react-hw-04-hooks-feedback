import { useState } from "react";
import Title from "../Title";
import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";
import Statistics from "../Statistics";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objOptions = {
    good,
    neutral,
    bad,
  };

  // console.log(objOptions);

  const increase = (value) => {
    switch (value) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        console.log("noob");
        return;
    }
  }

  const countTotalFeedback = (...array) => {
    return array.reduce((total, elem) => total + elem, 0)
  }

  let total = countTotalFeedback(good, neutral, bad);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / total)
  }

  return (
    <>
      <Title title={"Please leave feetback"} />
      <FeedbackOptions objOptions={objOptions} onLeaveFeedback={increase} />
      <Title title={"Statistics"} />
      {good || bad || neutral ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
export default Feedback

