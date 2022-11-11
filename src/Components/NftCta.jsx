import imageTop from "../assets/cta/image-t.png";
import imageBL from "../assets/cta/image-bl.png";
import imageBR from "../assets/cta/image-br.png";

const NftCta = () => {
  return (
    <section className="flex-default layout" id="cta">
      <div className="text-content">
        <h2 className="text-5xl">Metabnb NFTs </h2>

        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>

        <a href="#" className="btn">
          Learn more
        </a>
      </div>

      <div className="img-content">
        <img src={imageTop} alt="" className="top-0 right-5" />
        <img src={imageBL} alt="" className="bottom-3.5 left-0" />
        <img src={imageBR} alt="" className="bottom-0 right-0" />
      </div>
    </section>
  );
};

export default NftCta;
