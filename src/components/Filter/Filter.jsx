import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContainerFilter, Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const inputId = nanoid();
  return (
    <ContainerFilter>
      <Label htmlFor={inputId}> Find contacts by name :</Label>
      <Input
        type="text"
        value={value}
        name="input"
        id={inputId}
        onChange={onChange}
      />
    </ContainerFilter>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
