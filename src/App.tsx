import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShowById from './containers/ShowById/ShowById';


function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows/:showId" element={<ShowById/>}/>
        <Route path="*" element={(<h1>Not Found!</h1>)}/>
      </Routes>
    </>
  );
}

export default App;
