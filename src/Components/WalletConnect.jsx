/* eslint-disable no-unused-vars */
import "../styles/WalletConnect.css";
import SvgImage from "./SvgImage";
import metamask from "../assets/metamask.svg";
import walletConnect from "../assets/walletConnect.svg";
import caret from "../assets/caret.svg";
import { useContext } from "react";
import { MetaContext } from "../Contexts/MetaContext";

const WalletConnect = () => {
  const { setShowWalletConnect } = useContext(MetaContext);

  return (
    <aside>
      <div className="wallet-container">
        <div className="flex-default head">
          <p>Connect Wallet</p>
          <a href="#" onClick={(e) => setShowWalletConnect(false)}>
            X
          </a>
        </div>

        <div className="content">
          <p>Choose your preferred wallet:</p>

          <div className="wallet flex-default">
            <div className="wall">
              <SvgImage data={metamask} customClass="w-max" />
              <p>Metamask</p>
            </div>
            <SvgImage data={caret} />
          </div>
          <div className="wallet flex-default">
            <div className="wall">
              <SvgImage data={walletConnect} customClass="w-max" />
              <p>WalletConnect</p>
            </div>
            <SvgImage data={caret} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WalletConnect;
