import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <ul className={style.headerList}>
          <li className={style.headerItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${style.headerLink} ${style.active}`
                  : style.headerLink
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className={style.headerItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${style.headerLink} ${style.active}`
                  : style.headerLink
              }
              to="phonebook"
            >
              Phonebook
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navigation;
