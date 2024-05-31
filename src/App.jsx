import "./App.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Landing from "./pages/landingPage/Landing";

function App() {
  return (
    <div>
      <Landing />
      <SignIn />
      <SignUp />
      <ErrorPage />
    </div>
  );
}

export default App;
