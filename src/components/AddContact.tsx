import { Box, Button, InputBase } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addContactAsync } from '../features/contacts/contactsSlice';

export const AddContact = () => {
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addContactAsync({ title: value }));
    setValue('');
    setIsDisabled(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <InputBase
        value={value}
        type="text"
        placeholder="Contact name"
        name="contact"
        onChange={handleChange}
      />

      <Button variant="outlined" type="submit" disabled={isDisabled}>
        Add contact
      </Button>
    </Box>
  );
};
