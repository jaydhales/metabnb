import Search from "./Search";
import image1 from "../assets/intro/image 1.png";
import image2 from "../assets/intro/image 2.png";
import image3 from "../assets/intro/image 3.png";
import image4 from "../assets/intro/image 4.png";

const IntroSect = () => {
  return (
    <section className="flex-default layout" id="intro">
      <div className="text-content">
        <h1 className="lg-text">
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>

        <p className="text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <Search />
      </div>

      <div className="img-content">
        <div className="md:mt-[78px]">
          <img className="mb-2" src={image1} />
          <img src={image2} />
        </div>
        <div>
          <img className="mb-2" src={image3} />
          <img src={image4} />
        </div>
      </div>
    </section>
  );
};

export default IntroSect;
