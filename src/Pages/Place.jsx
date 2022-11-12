/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import SvgImage from "../Components/SvgImage";
import Card from "../Components/Card";
import setting from "../assets/setting.svg";

import "../styles/Place.css";
import { useContext } from "react";
import { MetaContext } from "../Contexts/MetaContext";

const Place = () => {
  const { placeData } = useContext(MetaContext);

  return (
    <section className="layout">
      <div className="flex-default filter-sort">
        <nav className="flex-default filter">
          <a href="#">Restaurant</a>
          <a href="#">Cottage</a>
          <a href="#">Castle</a>
          <a href="#">Fantast city</a>
          <a href="#">Beach</a>
          <a href="#">Cabins</a>
          <a href="#">Off-grid</a>
          <a href="#">Farm</a>
        </nav>

        <div className="sort flex-default">
          <p>Location</p>
          <div>
            <img className="w-full" src={setting} />
          </div>
        </div>
      </div>

      <div className="collection">
        {placeData.map((src) => (
          <Card src={src} key={src} />
        ))}
      </div>
    </section>
  );
};

export default Place;
