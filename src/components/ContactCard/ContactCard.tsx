import { Box } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { addContactAsync, deleteContactAsync } from '../../features/contacts/contactsSlice';

type Props = {
  id: number;
  title: string;
};

export const ContactCard = ({ title, id }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addContactAsync({ title: 'Some new contact' }));
  };

  const handleDelete = () => {
    dispatch(deleteContactAsync({ id }));
  };

  return (
    <>
      <Box>{title}</Box>
      <button onClick={handleDelete}>Remove Contact</button>
      <button onClick={handleClick}>new contact</button>
    </>
  );
};
