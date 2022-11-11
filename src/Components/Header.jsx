import SvgImage from "../Components/SvgImage.jsx";
import Logo from "../assets/header-logo.svg";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="layout flex-default pt-11">
      <SvgImage data={Logo} customClass='logo' />

      <nav className="flex-default">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/place">Place to stay</NavLink>
        <NavLink to="/nfts">NFTs</NavLink>
        <NavLink to="/community">Community</NavLink>
      </nav>

      <a className="btn" href="#">
        Connect wallet
      </a>
    </header>
  );
};

export default Header;
