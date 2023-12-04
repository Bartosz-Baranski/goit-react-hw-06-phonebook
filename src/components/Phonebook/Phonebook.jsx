import PropTypes from 'prop-types';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveContacts } from 'components/redux/actions';

import css from './Phonebook.module.css';

export function Phonebook() {
  const dispatch = useDispatch();
  const contactsLocalStorage = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(saveContacts());
  }, [contactsLocalStorage, dispatch]);

  return (
    <div className={css.phonebook_box}>
      <div className={css.phonebook}>
        <ContactForm />
      </div>
      <ContactList />
    </div>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
};
