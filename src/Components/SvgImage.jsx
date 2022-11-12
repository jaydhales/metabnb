const SvgImage = ({ data, customClass }) => {
  return (
    <div className={customClass}>
      <img className="w-full" src={data} alt="" />
    </div>
  );
};

export default SvgImage;
