import { Link } from "react-router-dom";
import img from "../../assets/images/page_not_found.svg";
import Wrapper from "./error";
const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
