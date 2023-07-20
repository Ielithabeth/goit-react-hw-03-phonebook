import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';

export const ContactsList = ({ filterContacts, onDelete }) => {
    return (
      <ul>
        {filterContacts().map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            id={id}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  };

  ContactsList.propTypes = {
    filterContacts: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }