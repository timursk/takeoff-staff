import { FormEvent, useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { loginAsync, registrationAsync } from './userSlice';

export function UserRegistrationForm() {
  // const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && name && password) {
      console.log('Send dispatch');
      dispatch(registrationAsync({ email, name, password }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
