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
        <div className="" id="filter">
          <a href="#">Restaurant</a>
          <a href="#">Cottage</a>
          <a href="#">Castle</a>
          <a href="#">Fantast city</a>
          <a href="#">Beach</a>
          <a href="#">Cabins</a>
          <a href="#">Off-grid</a>
          <a href="#">Farm</a>
        </div>

        <div className="filter-mobile">
          <select name="filter">
            <option value="Restaurant">Restaurant</option>
            <option value="Cottage">Cottage</option>
            <option value="Castle">Castle</option>
            <option value="Fantast city">Fantast city</option>
            <option value="Beach">Beach</option>
            <option value="Cabins">Cabins</option>
            <option value="Off-grid">Off-grid</option>
            <option value="Farm">Farm</option>
          </select>
        </div>

        <div className="sort flex-default">
          <p>Location</p>

          <img src={setting} />
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
