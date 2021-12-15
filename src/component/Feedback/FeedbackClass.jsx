//WARNING!!!

// import { Component } from "react";
// import Title from "../Title";
// import FeedbackOptions from "../FeedbackOptions";
// import Notification from "../Notification";
// import Statistics from "../Statistics";

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   increase = (event) => {
//     const name = event.target.textContent;
//     this.setState((prevState) => {
//       return {
//         [name]: prevState[name] + 1,
//       }
//     });
//   }

//   render() {
//     const {good, neutral, bad} = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Title title={"Please leave feetback"} />
//         <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.increase} />
//         <Title title={"Statistics"} />
//         {good || bad || neutral ? (
//           <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </>
//     );
//   }
// }

// export default Feedback;
