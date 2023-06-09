import { Navigation } from '../../components/Navigation/Navigation';
import { UserMenu } from '../../components/UserMemu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../Hooks/UseAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};