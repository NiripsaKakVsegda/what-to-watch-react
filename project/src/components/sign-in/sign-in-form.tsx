import { FC, FormEvent, useRef, useState } from 'react';
import { SignInType } from '../../types/sign-in-type.enum';
import SignInMessage from './sign-in-message';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import SignInInputs from './sign-in-inputs';

const SignInForm: FC = () => {
  const [pageType, setPageType] = useState(SignInType.Regular);
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current === null || !loginRef.current.value.match(validRegex)) {
      setPageType(SignInType.Error);
      return;
    }
    if (passwordRef.current === null || !(/\d/.test(passwordRef.current.value) && /[a-zA-Z]/.test(passwordRef.current.value))) {
      setPageType(SignInType.Message);
      return;
    }
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form action="src/components/sign-in/sign-in-form#" className="sign-in__form" onSubmit={handleSubmit}>
      <SignInMessage type={pageType}/>
      <SignInInputs type={pageType} loginRef={loginRef} passwordRef={passwordRef}/>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

export default SignInForm;
