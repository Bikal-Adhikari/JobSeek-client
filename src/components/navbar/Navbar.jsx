import Wrapper from "./navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo";

const Navbar = ({ pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log("toggle Sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">{pageTitle}</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log("toggle logout dropdown")}
          >
            <FaUserCircle />
            {user?.fName}
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                console.log("logout user");
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
