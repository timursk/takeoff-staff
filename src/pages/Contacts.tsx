import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ContactCard } from '../components/ContactCard/ContactCard';
import { getContactsAsync, selectContacts } from '../features/contacts/contactsSlice';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <>
      {contacts.map(({ id, title }) => (
        <ContactCard key={id} id={id} title={title} />
      ))}
    </>
  );
};
