// import { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Options/FeedbackOptions';
import { Statistics } from './Feedback/Statistic/FeedbackStatistic';
import { Notification } from './Feedback/Notification/Notification';
import { Section } from './Feedback/Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = value => {
    console.log(value);

    switch (value) {
      case good:
        setGood(prevState => prevState + 1);
        break;
      case neutral:
        setNeutral(prevState => prevState + 1);
        break;
      case bad:
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleBtnClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// export class AppOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleBtnClick = event => {
//     const value = event.target.value;

//     console.log(value);

//     this.setState(prevState => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () =>
//     Object.values(this.state).reduce(
//       (total, prevState) => total + prevState,
//       0
//     );

//   countPositiveFeedbackPercentage = () =>
//     Math.round(
//       (this.state.good /
//         Object.values(this.state).reduce(
//           (total, feedback) => total + feedback,
//           0
//         )) *
//         100
//     );

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleBtnClick}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
