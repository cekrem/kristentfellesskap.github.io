import { useAuth } from './useAuth.js';

export const IfLoggedIn = ({ children }) => {
  const [, user] = useAuth();

  if (user) {
    return children;
  }
};

export const IfLoggedOut = ({ children }) => {
  const [, user] = useAuth();

  if (!user) {
    return children;
  }
};

export const IfLoading = ({ children }) => {
  const [loading] = useAuth();

  if (loading) {
    return children;
  }
};

export const LoginButton = () => {
  const [, , logIn] = useAuth();
  return (
    <IfLoggedOut>
      <div className="icon-link block" onClick={() => logIn()}>
        <i className="fa fa-google" aria-hidden="true"></i>Log in
      </div>
    </IfLoggedOut>
  );
};

export const LogoutButton = () => {
  const [, , , logout] = useAuth();
  return (
    <IfLoggedIn>
      <div className="icon-link block" onClick={() => logout()}>
        <i className="fa fa-google" aria-hidden="true"></i>Log out
      </div>
    </IfLoggedIn>
  );
};
