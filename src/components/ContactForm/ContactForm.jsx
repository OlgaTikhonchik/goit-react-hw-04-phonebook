// import { Component } from 'react';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, Error, FormContact, Input, Label } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field!!!'),
  number: yup.string().required('Number is a required field!!!'),
});

const initialValues = {
  name: '',
  number: '',
};
const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact autoComplete="off">
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Error name="name" component="div" />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Error name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.name, this.state.number);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;
//     const nameInputId = nanoid();
//     const numberInputId = nanoid();
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor={nameInputId}>Name</Label>
//         <Input
//           id={nameInputId}
//           value={name}
//           type="text"
//           name="name"
//           onChange={this.handleChange}
//           pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <Label htmlFor={numberInputId}>Number</Label>
//         <Input
//           id={numberInputId}
//           value={number}
//           type="tel"
//           name="number"
//           onChange={this.handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
