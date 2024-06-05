// import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AuthRoute } from "../auth/AuthRoute";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      {/* header  */}
      {/* <Header /> */}
      {/* <Container fluid> */}
      {/* <Row> */}
      {/* <Col xs={3} className="bg-dark text-light"> */}
      <div className="p-3">
        <div>Welcome Back</div>
        <h3>{user.fName + " " + user.lName}</h3>
      </div>
      {/* <UserSidebar /> */}
      {/* </Col> */}
      {/* <Col> */}
      <div className="p-2">{pageTitle}</div>
      <hr />
      <main className="main mb-3">{children}</main>
      {/* </Col> */}
      {/* </Row> */}
      {/* </Container> */}

      {/* footer  */}
      {/* <Footer /> */}
    </AuthRoute>
  );
};
