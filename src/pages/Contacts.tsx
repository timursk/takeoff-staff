import { Input } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ContactCard } from '../components/ContactCard/ContactCard';
import {
  addContactAsync,
  getContactsAsync,
  selectContacts,
} from '../features/contacts/contactsSlice';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addContactAsync({ title: 'Some new contact' }));
  };

  return (
    <>
      {contacts.map(({ id, title }) => (
        <ContactCard key={id} id={id} title={title} />
      ))}

      <Input></Input>
      <button onClick={handleClick}>new contact</button>
    </>
  );
};
