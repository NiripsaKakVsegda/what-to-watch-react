import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthStatus } from '../../types/auth-status.enum';
import { logoutAction } from '../../store/api-actions';

const UserBlock: FC = () => {
  const { authStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  if (authStatus !== AuthStatus.AUTH) {
    return (
      <ul className="user-block">
        <Link to={'/login'} className="user-block__link">Sign in</Link>
      </ul>
    );
  }
  return (
    (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={'/mylist'}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to={'/'} className="user-block__link" onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          >Sign out
          </Link>
        </li>
      </ul>
    )
  );
};

export default UserBlock;
