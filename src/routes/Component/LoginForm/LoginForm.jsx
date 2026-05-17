import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '@/redux/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(logIn(form.elements.login.value));
    e.currentTarget.reset();
    navigate('/', { replace: true });
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
