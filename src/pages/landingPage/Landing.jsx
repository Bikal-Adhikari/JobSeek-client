import logo from "../../assets/images/logo.svg";
import main from "../../assets/images/main.svg";
import Wrapper from "./landingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="JobSeek logo" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="jobHunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
