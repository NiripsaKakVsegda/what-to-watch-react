import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../types/auth-status.enum';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.AUTH
      ? children
      : <Navigate to={'/login'} />
  );
}

export default PrivateRoute;
