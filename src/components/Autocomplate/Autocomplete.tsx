import {SearchShow, ShowData} from '../../types';
import {
    isAutocompleteVisibleSelector,
    searchShowsSelector,
    selectFetchShowsLoading,
    setAutocompleteVisibility
} from '../../store/showsSlice';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../app/hooks';
import Spinner from '../Spinner/Spinner';
import {useDispatch} from 'react-redux';

const Autocomplete = () => {
  const dispatch = useDispatch();
  const fetchShows = useAppSelector(searchShowsSelector);
  const fetchLoading = useAppSelector(selectFetchShowsLoading);
  const isAutocompleteVisible = useAppSelector(isAutocompleteVisibleSelector);

  let searchShows: SearchShow[] = [];

  if (fetchShows) {
    searchShows = fetchShows.map((show: ShowData) => ({
      id: show.show.id,
      name: show.show.name
    }));
  }

  const onClick = () => {
    dispatch(setAutocompleteVisibility(false));
  };


  const showList = isAutocompleteVisible && (searchShows.length > 0 ? (
    <ul className="list-group rounded-0">
      {searchShows.map((show: SearchShow) => (
        <li className="list-group-item" style={{maxWidth: '300px'}} key={show.id}>
          <Link to={`/shows/${show.id}`} onClick={onClick}>{show.name}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not found!!</p>
  ));

  return (
    <div>
      {fetchLoading ? <Spinner/> : showList}
    </div>
  );
};

export default Autocomplete;
