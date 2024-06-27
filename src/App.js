import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/homepage'
import Admin from './components/admin';
export default function App() {
    

    return (<div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/> } />
                <Route path='/admin' element={<Admin></Admin>}/>
            </Routes>
        </BrowserRouter>
        {/* <ButtonBaseDemo/> */}
    </div>)}
