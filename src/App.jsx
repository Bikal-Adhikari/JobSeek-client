import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landingPage/Landing";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./features/user/userAction.js";
import Stats from "./pages/dashboard/Stats.jsx";
import AllJobs from "./pages/dashboard/AllJobs.jsx";
import AddJobs from "./pages/dashboard/AddJobs.jsx";
import Profile from "./pages/dashboard/Profile.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
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
