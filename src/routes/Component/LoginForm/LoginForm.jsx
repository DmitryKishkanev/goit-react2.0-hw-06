import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
