import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./view/auth/sign_in/SignIn";
import SignUp from "./view/auth/sign_up/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
