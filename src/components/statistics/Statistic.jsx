import PropTypes from 'prop-types';
export const Statistic = ( {good, neutral, bad, total, positivePercentage} ) => {
    return(
        <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>PositivePercentage: {positivePercentage}%</p>
        </>
    )}
  
    Statistic.propTypes = {
            good: PropTypes.number,
            neutral: PropTypes.number,
            bad: PropTypes.number,
            total: PropTypes.number,
            positivePercentage: PropTypes.string,
          }