import PropTypes from 'prop-types'

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
    return (
        <button type='button' data-feedback={feedback} onClick={onLeaveFeedback}>
            {feedback}
        </button>
    )
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => FeedbackButton({ feedback: option, onLeaveFeedback}))
}

FeedbackOptions.PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions