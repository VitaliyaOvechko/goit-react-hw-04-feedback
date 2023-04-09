import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const objectKeysList = Object.keys(options);

  return (
    <List>
      {objectKeysList.map(option => (
        <ListItem key={option}>
          <Button
            type="button"
            value={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
