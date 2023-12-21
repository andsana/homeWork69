import {ChangeEvent, useState} from 'react';
import {useAppDispatch} from '../../app/hooks';
import {fetchSearchShows} from '../../store/showsThunks';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>('');

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.length >= 3) {
      dispatch(fetchSearchShows(inputValue));
    }
  };

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