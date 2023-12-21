import {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {fetchSearchShows} from '../../store/showsThunks';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>('');


  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
      dispatch(fetchSearchShows(e.target.value));
  };

  return (
    <div>
      <input type="text" value={searchInput} onChange={inputChange} minLength={3}/>
    </div>
  );
};

export default SearchInput;