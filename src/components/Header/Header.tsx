import { AppBar, Button, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../constants/routes';
import { logout } from '../../features/user/userSlice';
import { BurgerMenu } from './BurgerMenu';
import { Links } from './Links';

export const Header = () => {
  const { name, isAuth } = useAppSelector((state) => state.user);
  const matches = useMediaQuery('(min-width: 600px)');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.MAIN);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          App
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {isAuth && (
            <>
              <Typography>Hi, {name}!</Typography>
              <Button color="inherit" variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}

          {matches ? <Links /> : <BurgerMenu />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
