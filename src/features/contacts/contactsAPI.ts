import axios, { AxiosResponse } from 'axios';
import { Contact, DeleteContact, NewContact } from './types';

const API_URL = 'http://localhost:5000/contacts';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const getContacts = async (): Promise<AxiosResponse<Contact[]>> => {
  return $api.get('');
};

export const addContact = async ({ title }: NewContact): Promise<AxiosResponse<Contact>> => {
  return $api.post<Contact>(``, { title });
};

export const editContact = async ({ id, title }: Contact): Promise<AxiosResponse<Contact>> => {
  return $api.put<Contact>(`${id}`, { title });
};

export const deleteContactApi = async ({ id }: DeleteContact): Promise<AxiosResponse<Contact>> => {
  return $api.delete(`${id}`);
};
