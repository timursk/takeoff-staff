import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AddContact } from '../components/AddContact';
import { ContactCard } from '../components/ContactCard';
import { getContactsAsync, selectContacts } from '../features/contacts/contactsSlice';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <Container>
      <ContactsContainer>
        {contacts.map(({ id, title }) => (
          <ContactCard key={id} id={id} title={title} />
        ))}
      </ContactsContainer>

      <AddContact />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContactsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;
