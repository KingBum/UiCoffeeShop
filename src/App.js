import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
import Admin from "./pages/admin/Admin";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/edit/Edit";

function App() {
  const user = useContext(AuthContext)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={user.user ? <Home/> : <Login/>} />
          <Route path="/register" element={user.user ? <Home/> : <Register/>} />
          <Route path="/create" element={user.user?.isAdmin ? <Create/> : <Home/>} />
          <Route path="/adminboard" element={user.user?.isAdmin ? <Admin/> : <Home/>} />
          <Route path="/edititem/:id" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
