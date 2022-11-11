import SvgImage from "./SvgImage";
import MbToken from "../assets/sponsors/mbtoken.svg";
import Metamask from "../assets/sponsors/metamask.svg";
import Opensea from "../assets/sponsors/opensea.svg";

const SponsorBand = () => {
  return (
    <section className="flex-default bg-primary layout">
      <SvgImage data={MbToken} />
      <SvgImage data={Metamask} />
      <SvgImage data={Opensea} />
    </section>
  );
};

export default SponsorBand;
