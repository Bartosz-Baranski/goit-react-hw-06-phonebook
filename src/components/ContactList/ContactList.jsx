import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'components/redux/actions';
import { deleteContact } from 'components/redux/contactSlice';

import css from './ContactList.module.css';

export function ContactList() {
  const filter = useSelector(state => state.contact.filter);
  const contactList = useSelector(state => state.contact.contacts);
  console.log(contactList);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ name, number }) => {
    dispatch(setFilter(name, number));
  };

  const filteredContacts = contactList.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(filter.name.toLowerCase()) &&
      number.includes(filter.number)
    );
  });

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
            onChange={e =>
              handleFilter({ name: e.target.value, number: filter.number })
            }
          ></input>
        </label>
      </form>

      <ul className={css.contact_list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li id={id} key={id} className={css.contact_list_item}>
            <p>{name}</p>
            <p> {number}</p>
            <button
              className={css.delete_btn}
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
