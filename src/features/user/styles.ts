import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const formStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
};

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const loadingButtonStyles = {
  background: 'grey',
};
