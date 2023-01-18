import { FC, MutableRefObject, memo } from 'react';
import { SignInType } from '../../types/sign-in-type.enum';

type Props = {
  type: SignInType;
  loginRef: MutableRefObject<HTMLInputElement | null>;
  passwordRef: MutableRefObject<HTMLInputElement | null>;
}

const SignInInputs: FC<Props> = (props) => {
  const { type, loginRef, passwordRef } = props;
  return (
    <div className="sign-in__fields">
      <div className={`sign-in__field${type === SignInType.IncorrectEmail ? ' sign-in__field--error' : ''}`}>
        <input className="sign-in__input" type="text" placeholder="Email address" name="user-email"
          id="user-email" ref={loginRef}
        />
        <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
      </div>
      <div className={`sign-in__field${type === SignInType.IncorrectPassword ? ' sign-in__field--error' : ''}`}>
        <input className="sign-in__input" type="text" placeholder="Password" name="user-password"
          id="user-password" ref={passwordRef}
        />
        <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
      </div>
    </div>
  );
};

export default memo(SignInInputs, (prevProps, nextProps) =>
  prevProps.loginRef.current?.value === nextProps.loginRef.current?.value &&
  prevProps.passwordRef.current?.value === nextProps.passwordRef.current?.value);
