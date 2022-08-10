import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSchema } from '../../constants/validate';
import { formStyles, loadingButtonStyles, StyledTextField } from './styles';
import { loginAsync } from './userSlice';

export const UserLoginForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      dispatch(loginAsync({ email, password }));
    },
    validationSchema: loginSchema,
  });

  return (
    <Box component="form" noValidate sx={formStyles} onSubmit={handleSubmit}>
      <StyledTextField
        value={values.email}
        type="email"
        label="Email"
        name="email"
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        onChange={handleChange}
      />

      <StyledTextField
        value={values.password}
        type="password"
        label="Password"
        name="password"
        error={touched.password && !!errors.password}
        helperText={touched.password && errors.password}
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        type="submit"
        disabled={isLoading}
        style={isLoading ? loadingButtonStyles : null}
      >
        Submit
      </Button>
    </Box>
  );
};
