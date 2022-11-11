import SvgImage from "../Components/SvgImage.jsx";
import Logo from "../assets/footer-logo.svg";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="layout pt-14">
      <div className="footer-main">
        <div className="footer-icons">
          <SvgImage data={Logo} />
          <div className="socials">
            <SvgImage data={facebook} />
            <SvgImage data={instagram} />
            <SvgImage data={twitter} />
          </div>
        </div>

        <div className="footer-content">
          <div className="links">
            <p>Community</p>
            <nav>
              <a href="#">NFT</a>
              <a href="#">Tokens</a>
              <a href="#">Landlords</a>
              <a href="#">Discord</a>
            </nav>
          </div>
          <div className="links">
            <p>Places</p>
            <nav>
              <a href="#">Castle</a>
              <a href="#">Farms</a>
              <a href="#">Beach</a>
              <a href="#">Learn more</a>
            </nav>
          </div>
          <div className="links">
            <p>About us</p>
            <nav>
              <a href="#">Road map</a>
              <a href="#">Creators</a>
              <a href="#">Career</a>
              <a href="#">Learn more</a>
            </nav>
          </div>
        </div>
      </div>

      <p className="mt-8 mb-4">© 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
