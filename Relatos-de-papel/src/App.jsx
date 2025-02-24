import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Main.jsx'
import ViewBook from "./components/ViewBook.jsx";
import ViewCheckOut from "./components/ViewCheckOut.jsx";
import {PurchaseProvider} from "./context/PurchaseContext.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {UserProvider} from "./context/userContext.jsx";
import Reports from "./components/Reports.jsx";
function App() {

    return (
        <PurchaseProvider>
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/main" element={<Main/>} />
                <Route path="/book/:title" element={<ViewBook/>} />
                <Route path="/compra" element={<ViewCheckOut/>} />
                <Route path="/user" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/Reports" element={<Reports/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
        </UserProvider>
        </PurchaseProvider>
    )
}

export default App

