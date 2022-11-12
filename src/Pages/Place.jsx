import SvgImage from "../Components/SvgImage";
import Card from "../Components/Card";
import setting from "../assets/setting.svg";
import "../styles/Place.css";

const Place = () => {
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
          <SvgImage data={setting} />
        </div>
      </div>

      <div className="collection">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Place;
