import {selectShows} from '../../store/showsSlice';
import {useSelector} from 'react-redux';
import {ShowData, SearchShow} from '../../types';

const Autocomplete = () => {
  const fetchShows = useSelector(selectShows);

  let searchShows: SearchShow[] = [];

  if (fetchShows) {
    searchShows = fetchShows.map((show: ShowData) => ({
      id: show.show.id,
      name: show.show.name
    }));
  }

  const showList = searchShows.length > 0 ? (
    <ul className="list-group rounded-0">
      {searchShows.map((show: SearchShow) => (
        <li className="list-group-item" style={{maxWidth: '300px'}} key={show.id}>
          {show.name}
        </li>
      ))}
    </ul>
  ) : (
    <p>Not found</p>
  );

  return (
    <div>
      {showList}
    </div>
  );
};

export default Autocomplete;
