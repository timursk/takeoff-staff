export interface Contact {
  title: string;
  id: number;
}

export interface NewContact {
  title: string;
}

export interface DeleteContact {
  id: number;
}

export interface ContactsState {
  contacts: Contact[];
  isLoading: boolean;
}
