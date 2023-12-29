import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button
            name={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
