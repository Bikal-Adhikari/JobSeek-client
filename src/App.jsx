import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landingPage/Landing";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp/SignUp.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
