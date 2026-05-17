import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '@/redux/filter/filterSlice';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const value = useSelector(state => state.filters.name);
  const dispatch = useDispatch();
  const fieldNameId = useId();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label htmlFor={fieldNameId} className={style.label}>
        Find contacts by name
      </label>
      <input
        className={style.field}
        type="text"
        value={value}
        id={fieldNameId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
