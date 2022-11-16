import Login from "./components/Login";
import GlobalStyle from "./css/Global.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import CreateList from "./components/TaskList/CreateList";
import TaskHome from "./components/TaskItem/TaskHome";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="home/all" element={<Homepage />} />
          <Route path="home/create" element={<CreateList />} />
          <Route path="home/:listId/:listName" element={<TaskHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
