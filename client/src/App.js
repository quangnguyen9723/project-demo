import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './layouts/Header/Header';
import {DashBoard} from './layouts/DashBoard/DashBoard';
import {ItemDetails} from './layouts/ItemDetails/ItemDetails';
import {UserContextProvider} from "./hooks/context/UserContext";

function App() {
    return (
        <UserContextProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<DashBoard/>}/>
                    <Route path="/items/:id" element={<ItemDetails />}/>
                </Routes>
            </Router>
        </UserContextProvider>
    )}

export default App;
