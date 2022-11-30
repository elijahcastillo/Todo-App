import Login from "./components/Login";
import GlobalStyle from "./css/Global.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateList from "./components/TaskList/CreateList";
import TaskHome from "./components/TaskItem/TaskHome";
import Homepage from "./components/Homepage";
import EditItem from "./components/TaskItem/EditItem";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="home/all" element={<Homepage />} />
          <Route path="home/create" element={<CreateList />} />
          <Route path="home/:listId/:listName" element={<TaskHome />} />
          <Route
            path="home/update-item/:taskId/:oldText/:oldDate"
            element={<EditItem />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
