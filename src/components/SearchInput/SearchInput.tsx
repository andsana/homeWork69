import {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {searchShows} from "../../store/showsThunks";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>('');


  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
      dispatch(searchShows(e.target.value));
  };

  return (
    <div>
      <input type="text" value={searchInput} onChange={inputChange} minLength={3}/>
    </div>
  );
};

export default SearchInput;