// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { contacts } from '../contactsData';

import css from './ContactList.module.css';

export function ContactList() {
  const contactList = useSelector(state => state.task);
  console.log(contactList);
  return (
    <div className={css.contact_list_container}>
      <h2>Contacts</h2>
      <form className={css.contact_form}>
        <label className={css.phonebook_label}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            // value={filter}
            // onChange={handleChange}
          ></input>
        </label>
      </form>

      <ul className={css.contact_list}>
        {contacts.map(({ name, number, id }) => (
          <li id={id} key={id} className={css.contact_list_item}>
            <p>{name}</p>
            <p> {number}</p>
            <button
              className={css.delete_btn}
              // onClick={() => deleteContact(id)}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
