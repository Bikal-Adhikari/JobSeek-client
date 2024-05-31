import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landingPage/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
