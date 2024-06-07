import { useSelector } from "react-redux";
import { AuthRoute } from "../auth/AuthRoute";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import Wrapper from "./userlayout.js";
import SmallSidebar from "../smallSidebar/SmallSidebar.jsx";
import Navbar from "../navbar/Navbar.jsx";
import BigSidebar from "../bigSidebar/BigSidebar.jsx";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
          </div>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </main>
        <div className="p-3">
          <div>Welcome Back</div>
          <h3>{user.fName + " " + user.lName}</h3>
        </div>

        <div className="p-2">{pageTitle}</div>
        <hr />
        <main className="main mb-3">{children}</main>

        <Footer />
      </Wrapper>
    </AuthRoute>
  );
};
