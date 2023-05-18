import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { ListContasts } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListContasts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ListContasts>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
