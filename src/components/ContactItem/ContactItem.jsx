import PropTypes from 'prop-types';
import { Btn, Item, Text } from './ContactItem.styled';
export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <Item>
      <Text>
        {name} : {number}
      </Text>

      <Btn onClick={() => onDelete(id)}>Delete</Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
