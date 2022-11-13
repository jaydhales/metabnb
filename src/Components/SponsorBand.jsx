/* eslint-disable no-unused-vars */
import SvgImage from "./SvgImage";
import MbToken from "../assets/sponsors/mbtoken.svg";
import Metamask from "../assets/sponsors/metamask.svg";
import Opensea from "../assets/sponsors/opensea.svg";

const SponsorBand = () => {
  return (
    <section className="grid gap-6 place-content-center md:flex-default  bg-primary layout ">
      <img src={MbToken} className="w-[240px]" />
      <img src={Metamask} className="w-[240px]" />
      <img src={Opensea} className="w-[240px]" />
    </section>
  );
};

export default SponsorBand;
