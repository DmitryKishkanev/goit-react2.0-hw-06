import { useSelector } from 'react-redux';
import { getContactsValue } from './contact/contactsSlice';
import { getFiltersValue } from './filter/filterSlice';
import { getAuthLoginValue, getAuthIsLoggedInValue } from './auth/authSlice';

export const useGetState = () => {
  return {
    contacts: useSelector(getContactsValue),
    filters: useSelector(getFiltersValue),
    login: useSelector(getAuthLoginValue),
    isLoggedIn: useSelector(getAuthIsLoggedInValue),
  };
};
