import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" exact element={<ProtectedRoute Component={HomePage} />} />
    </Routes>
  );
}

export default App;
