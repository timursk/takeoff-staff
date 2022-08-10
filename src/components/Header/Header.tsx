import { AppBar, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { BurgerMenu } from './BurgerMenu';
import { Links } from './Links';

export const Header = () => {
  const { name, isAuth } = useAppSelector((state) => state.user);
  const matches = useMediaQuery('(min-width: 600px)');

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          App
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {isAuth && <Typography>Hi, {name}!</Typography>}

          {matches && <Links />}

          {!matches && <BurgerMenu />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
