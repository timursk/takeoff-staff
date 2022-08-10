import { object, string } from 'yup';

const emailError = 'Invalid email';
const passError = 'Password need to be 6 to 14 characters';
const nameError = 'Name must be 3 characters or bigger';

const passValidate = /^[A-Za-z]\w{5,14}$/;
const nameValidate = /^[A-Za-z]{3,}$/;

export const loginSchema = object({
  email: string().email(emailError).required('Required'),
  password: string().matches(passValidate, passError).required('Required'),
});

export const registrationSchema = object({
  email: string().email(emailError).required('Required'),
  name: string().matches(nameValidate, nameError).required('Required'),
  password: string().matches(passValidate, passError).required('Required'),
});
