import cta from "../assets/cta.png";

const NftCta = () => {
  return (
    <section className="md:flex-default layout" id="cta">
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
        <img src={cta} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default NftCta;
