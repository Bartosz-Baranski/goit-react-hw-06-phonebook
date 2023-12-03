// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'components/redux/actions';
import { deleteContact } from 'components/redux/conatctSlice';

import css from './ContactList.module.css';

export function ContactList() {
  const contactList = useSelector(state => state.contact);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactList.id));
  };

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

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
            onChange={handleFilter}
          ></input>
        </label>
      </form>

      <ul className={css.contact_list}>
        {contactList.map(({ name, number, id }) => (
          <li id={id} key={id} className={css.contact_list_item}>
            <p>{name}</p>
            <p> {number}</p>
            <button className={css.delete_btn} onClick={handleDelete}>
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}