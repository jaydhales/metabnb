import metamask from "../assets/metamask.svg";
import walletConnect from "../assets/walletConnect.svg";
import caret from "../assets/caret.svg";
import { useContext, useEffect } from "react";
import { MetaContext } from "../Contexts/MetaContext";

import "../styles/WalletConnect.css";

const WalletConnect = () => {
  const { showWalletConnect, setShowWalletConnect, setNavIsActive } =
    useContext(MetaContext);

  useEffect(() => {
    setNavIsActive(false);
  }, [showWalletConnect]);

  return (
    <aside>
      <div className="wallet-container">
        <div className="flex-default head">
          <p>Connect Wallet</p>
          <a
            href="#"
            className="close-btn"
            onClick={(e) => setShowWalletConnect(false)}
          ></a>
        </div>

        <div className="content">
          <p>Choose your preferred wallet:</p>

          <div className="wallet flex-default">
            <div className="wall">
              <img src={metamask} alt="" />
              <p>Metamask</p>
            </div>
            <img src={caret} />
          </div>
          <div className="wallet flex-default">
            <div className="wall">
              <img src={walletConnect} alt="" />
              <p>WalletConnect</p>
            </div>
            <img src={caret} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WalletConnect;
