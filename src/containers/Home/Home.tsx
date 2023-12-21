import Autocomplete from '../../components/Autocomplate/Autocomplete';
import SearchInput from '../../components/SearchInput/SearchInput';

function Home() {
  return (
    <div className="container-fluid">
      <SearchInput/>
      <Autocomplete/>
    </div>
  );
}


export default Home;
