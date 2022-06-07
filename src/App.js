import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";

function App() {
    return (
        <BrowserRouter>
            {/*set header as always visible*/}
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/"  exact element={<Home/>}/>

            </Routes>
        </BrowserRouter>

    );
}

export default App;
