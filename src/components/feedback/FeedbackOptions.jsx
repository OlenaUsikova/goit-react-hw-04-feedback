import {StyledButton} from './FeedbackOptions.styled'
import PropTypes from 'prop-types'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
      return(
        <div
        style={{ margin: "0 auto",
                 display: 'flex',
                 justifyContent: 'center'}}>
        <StyledButton name= {options[0]} onClick={onLeaveFeedback}>Good</StyledButton>
        <StyledButton name= {options[1]} onClick={onLeaveFeedback}>Neutral</StyledButton>
        <StyledButton name= {options[2]} onClick={onLeaveFeedback}>Bad</StyledButton>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string),
    onLeaveFeedback: PropTypes.func    
    }