import React, {ChangeEvent} from 'react';
import {fetchSearchShows} from '../../store/showsThunks';
import {SearchInputSelector, setAutocompleteVisibility, setSearchInput} from '../../store/showsSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useLocation} from 'react-router-dom';

const SearchInput: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const searchInput = useAppSelector(SearchInputSelector);
  const location = useLocation();

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(setSearchInput(inputValue));

    if (inputValue.length >= 3) {
      dispatch(fetchSearchShows(inputValue));
      dispatch(setAutocompleteVisibility(true));
    }
  };

  React.useEffect(() => {
    if (location.pathname === '/') {
      dispatch(setSearchInput(''));
    }
  }, [location.pathname, dispatch]);

  return (
    <>
      <label htmlFor="name" className="mb-3">Search for TV Show</label>
      <input className="input-group mb-3"
             id="name"
             type="text"
             value={searchInput}
             onChange={inputChange}
             style={{maxWidth: '300px'}}
      />
    </>
  );
};

export default SearchInput;