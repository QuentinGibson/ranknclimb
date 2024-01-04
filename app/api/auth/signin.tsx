import { authenticate } from '@/app/lib/actions';
import SignInPage from '@/app/ui/signIn/signin-page';
import { useFormState } from 'react-dom';

export const SignIn = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  <SignInPage dispatch={dispatch} />;
};

export default SignIn;
