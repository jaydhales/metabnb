import Logo from "../assets/header-logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MetaContext } from "../Contexts/MetaContext.jsx";

import "../styles/hamburger.css";
import "../styles/Header.css";

const Header = () => {
  const {
    showWalletConnect,
    setShowWalletConnect,
    navIsActive,
    setNavIsActive,
  } = useContext(MetaContext);

  return (
    <header className="layout flex-default">
      <div>
        <img className="w-full" src={Logo} />
      </div>

      <div className="nav-box" id={navIsActive ? "nav-active" : ""}>
        <nav className="md:flex-default">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/place">Place to stay</NavLink>
          <NavLink to="/nfts">NFTs</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>

        <a
          className="btn"
          href="#"
          onClick={(e) => setShowWalletConnect(!showWalletConnect)}
        >
          Connect wallet
        </a>
      </div>

      <div className="toggle-btn">
        <button
          className={
            "hamburger hamburger--slider " + (navIsActive && "is-active")
          }
          type="button"
          onClick={(e) => setNavIsActive(!navIsActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
