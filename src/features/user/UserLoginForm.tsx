import { FormEvent, useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { loginAsync } from './userSlice';

export function UserLoginForm() {
  // const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      console.log('Send dispatch');
      dispatch(loginAsync({ email, password }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
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
