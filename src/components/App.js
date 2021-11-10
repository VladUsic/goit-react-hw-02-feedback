import { Component } from 'react'

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

import { FEEDBACK_OPTIONS } from '../data/constans'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = ({ target }) => {
      const { feedback } = target.dataset
      this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1})) 
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositivePercantage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    return total ? Math.round((good / total) * 100) : 0
  } 

  render () {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercantage = this.countPositivePercantage()
    
    return (
    <div>
      <Section title='Please leavefeedback'>
        <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handleFeedback} />
      </Section>
      <Section title='Statistics'>
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positivePercantage={positivePercantage}  
        />
      </Section>
    </div>
    )
  }
}

export default App;
