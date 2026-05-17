import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '@/redux/contact/contactsSlice';

import style from './Contact.module.css';

const Contact = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={style.contactItem} key={id}>
          <div className={style.contactBox}>
            <p className={style.contactContent}>
              <BiSolidUser />
              {name}:
            </p>
            <p className={style.contactContent}>
              <BiSolidPhone />
              {number}
            </p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Contact;
