/* eslint-disable no-unused-vars */
import SvgImage from "./SvgImage";
import img from "../assets/collections/img.svg";
import stars from "../assets/five-stars.svg";

const Card = ({ src }) => {
  return (
    <div className="border-line border rounded-xl p-4 w-[280px]">
      <div>
        <img src={src} alt="" className="w-full" />
      </div>

      <div className="card-content text-[12px] grid gap-2.5 mt-4">
        <div className="flex-default">
          <p>Desert King</p>
          <p className="font-bold">1MBT per night</p>
        </div>

        <div className="flex-default">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <img src={stars} />
      </div>
    </div>
  );
};

export default Card;
