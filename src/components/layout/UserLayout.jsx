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
            <Navbar pageTitle={pageTitle} />
          </div>
          <div className="dashboard-page">
            <Outlet />
            {children}
          </div>
        </main>
      </Wrapper>
      <Footer />
    </AuthRoute>
  );
};
