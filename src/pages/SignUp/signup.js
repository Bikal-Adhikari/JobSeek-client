import styled from "styled-components";
import signupBg from "../../assets/images/signup.svg";

const Wrapper = styled.section`
  background-image: url(${signupBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    background: rgba(
      255,
      255,
      255,
      0.8
    ); /* Semi-transparent white background */
    padding: 2rem; /* Adds some padding */
    border-radius: 8px; /* Rounds the corners of the form */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Adds a subtle shadow for better visibility */
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Wrapper;
