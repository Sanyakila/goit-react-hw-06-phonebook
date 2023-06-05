import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/selectors/selectors';
import css from './App.module.css';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const contacts = useSelector(getAllContacts);

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          {contacts.length === 0 ?
            (<p className={css.messageUser}>There are no contacts in the Phonebook</p>
            ) : (
              <ContactList />
            )}
        </div>
      </div>
    );
};