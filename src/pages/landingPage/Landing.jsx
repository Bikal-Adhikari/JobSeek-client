import main from "../../assets/images/main.svg";
import Logo from "../../components/Logo";
import Wrapper from "./landingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Find your perfect job easily. Create a profile, browse top
            opportunities, and apply with one click. Start your career journey
            today!
          </p>
          <Link to="/sign-in" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="jobHunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
