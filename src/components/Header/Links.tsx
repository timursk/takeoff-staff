import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const LINKS = [
  { title: 'Login', to: ROUTES.MAIN },
  { title: 'Contacts', to: ROUTES.CONTACTS },
];

export const Links = () => {
  return (
    <Stack direction="row" spacing={2}>
      {LINKS.map(({ title, to }, idx) => (
        <StyledNavLink
          key={idx}
          to={to}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : null)}
        >
          <Typography>{title}</Typography>
        </StyledNavLink>
      ))}
    </Stack>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
