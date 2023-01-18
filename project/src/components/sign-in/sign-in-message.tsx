import { FC, memo } from 'react';
import { SignInType } from '../../types/sign-in-type.enum';

type Props = {
  type: SignInType;
}

const SignInMessage: FC<Props> = (props) => {
  const { type } = props;

  if (type === SignInType.Regular) {
    return null;
  }

  return (
    <div className="sign-in__message">
      <p>{type === SignInType.IncorrectEmail ?
        'Please enter a valid email address'
        : 'Password should contain 1 letter and 1 number'}
      </p>
    </div>
  );
};

export default memo(SignInMessage, (prevProps, nextProps) => prevProps.type === nextProps.type);
