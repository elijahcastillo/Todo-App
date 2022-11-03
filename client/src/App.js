import Login from "./components/Login";
import GlobalStyle from "./css/Global.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute />}>
          <Route path="all" element={<div>INSIDE</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
