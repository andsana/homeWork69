import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>

    )
}

export default App;
