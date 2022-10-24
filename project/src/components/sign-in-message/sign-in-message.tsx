import { FC } from 'react';

type Props = {
  message: string;
}

const SignInMessage: FC<Props> = (props) => {
  const {message} = props;
  return (
    <div className="sign-in__message">
      <p>{message}</p>
    </div>
  );
};

export default SignInMessage;
