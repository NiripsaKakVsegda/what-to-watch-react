import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../types/auth-status.enum';
import { APIRoute } from '../../types/api-route.enum';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.AUTH ? children : <Navigate to={APIRoute.Login} />
  );
}

export default PrivateRoute;
