import { useContext } from "react";
import { MetaContext } from "../Contexts/MetaContext";
import Card from "./Card";

const InspoSect = () => {
  const { placeData } = useContext(MetaContext);

  return (
    <section className="layout">
      <h2 className="text-5xl text-center font-bold text-black">
        Inspiration for your next adventure
      </h2>

      <div className="collection">
        {placeData.map((src) => (
          <Card src={src} key={src} />
        ))}
      </div>
    </section>
  );
};

export default InspoSect;
