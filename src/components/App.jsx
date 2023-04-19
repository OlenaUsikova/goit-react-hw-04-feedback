import React from 'react';
import { useEffect, useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistic } from './statistics/Statistic';

export const App = () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
   const onLeaveFeedback = e => {
    const { name } = e.target;
    if (name === "good"){setGood(prevState => prevState + 1)}
    if (name === "neutral"){setNeutral(prevState => prevState + 1)}
    if (name === "bad"){setBad(prevState => prevState + 1)}
  };
  // onLeaveFeedback = e => {
  //   const { name } = e.target;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  const countTotalFeedback = () =>
    good + neutral + bad;

    const countPositiveFeedbackPercentage = total => {
    return ((good / total) * 100).toFixed();
  };
  
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please, leave a feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Statistic
              {...this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <p>"There is no feedback"</p>
          )}
        </Section>
      </div>
    );
  }

// render() {
//   const total = this.countTotalFeedback();
//   const positivePercentage = this.countPositiveFeedbackPercentage(total);
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 30,
//         color: '#010101',
//       }}
//     >
//       <Section title="Please, leave a feedback">
//         <FeedbackOptions
//           onLeaveFeedback={this.onLeaveFeedback}
//           options={Object.keys(this.state)}
//         />
//       </Section>
//       <Section title="Statistics:">
//         {this.countTotalFeedback() ? (
//           <Statistic
//             {...this.state}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <p>"There is no feedback"</p>
//         )}
//       </Section>
//     </div>
//   );
// }