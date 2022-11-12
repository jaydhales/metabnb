/* eslint-disable no-unused-vars */
import SvgImage from "./SvgImage";
import Search from "./Search";
import image1 from "../assets/intro/image 1.svg";
import image2 from "../assets/intro/image 2.svg";
import image3 from "../assets/intro/image 3.svg";
import image4 from "../assets/intro/image 4.svg";

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
        <div className="mt-[25%]">
          <SvgImage data={image1} />
          <SvgImage data={image2} />
        </div>
        <div>
          <SvgImage data={image3} />
          <SvgImage data={image4} />
        </div>
      </div>
    </section>
  );
};

export default IntroSect;
