import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { addContact, deleteContactApi, editContact, getContacts } from './contactsAPI';
import { Contact, ContactsState, DeleteContact, NewContact } from './types';

export const getContactsAsync = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await getContacts();

  if (!response.data.length) {
    throw new Error();
  }

  return response.data;
});

export const addContactAsync = createAsyncThunk(
  'contacts/fetchAddContact',
  async ({ title }: NewContact) => {
    const response = await addContact({ title });

    return response.data;
  }
);

export const editContactAsync = createAsyncThunk(
  'contacts/fetchEditContact',
  async ({ id, title }: Contact) => {
    const response = await editContact({ id, title });

    return response.data;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async ({ id }: DeleteContact) => {
    const response = await deleteContactApi({ id });

    return response.data;
  }
);

export const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<Contact>) => {
      state.contacts.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        item.title = action.payload.title;
      });
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.filter((item) => item.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getContactsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContactsAsync.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(addContactAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactAsync.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(editContactAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.contacts.findIndex((item) => item.id === action.payload.id);

        state.contacts[idx] = {
          id: action.payload.id,
          title: action.payload.title,
        };
      })
      .addCase(editContactAsync.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(deleteContactAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteContactAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { edit, deleteContact } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export default contactsSlice.reducer;
