import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Container, MainTitle, Title } from './App.styled';
import initialContacts from 'components/contacts.json';

export function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const LocalStoragecontacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(LocalStoragecontacts);
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} already in contact`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    console.log(contactId);
  };

  const handlerChangeFilter = e => {
    setFilter(e.currentTarget.value);
    console.log(filter);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={handlerChangeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Container>
  );
}
// export class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   };

//   componentDidMount() {
//     console.log('App componentDidMount');

//     const LocalStoragecontacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(LocalStoragecontacts);
//     console.log(LocalStoragecontacts);

//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }

//     console.log(parseContacts);
//   }

//   componentDidUpdate(prevPrors, prevState) {
//     console.log('App componentDidUpdate');
//     const nextContacts = this.state.contacts;
//     console.log('nextContacts:', nextContacts);
//     const prevContacts = prevState.contacts;
//     console.log('prevContacts:', prevContacts);

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = (name, number) => {
//     if (
//       this.state.contacts.some(
//         el => el.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       return alert(`${name} already in contact`);
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     this.setState(prevState => {
//       return { contacts: [contact, ...prevState.contacts] };
//     });

//     console.log(this.state.contacts);
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//     console.log(contactId);
//   };

//   handlerChangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//     console.log(this.state.filter);
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <MainTitle>Phonebook</MainTitle>
//         <ContactForm onSubmit={this.addContact} />
//         <Title>Contacts</Title>
//         <Filter value={this.state.filter} onChange={this.handlerChangeFilter} />
//         <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
//       </Container>
//     );
//   }
// }
