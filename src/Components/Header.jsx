/* eslint-disable no-unused-vars */
import SvgImage from "../Components/SvgImage.jsx";
import Logo from "../assets/header-logo.svg";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";
import { useContext } from "react";
import { MetaContext } from "../Contexts/MetaContext.jsx";

const Header = () => {
  const { showWalletConnect, setShowWalletConnect } = useContext(MetaContext);

  return (
    <header className="layout flex-default pt-11">
      <div>
        <img className="w-full" src={Logo} />
      </div>

      <nav className="flex-default">
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
    </header>
  );
};

export default Header;
