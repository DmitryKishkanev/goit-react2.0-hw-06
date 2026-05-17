import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '@/redux/auth/authSlice';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);

  return (
    <div className={style.userMenuBox}>
      <p>Hi, {login}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
