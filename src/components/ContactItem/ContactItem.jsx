import { Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onDelete }) => {
    return (
      <Item>
        <p>{name}:</p>
        <span>{number}</span>
        <button type="button" onClick={() => onDelete(id)}>
          ×
        </button>
      </Item>
    );
  };

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}