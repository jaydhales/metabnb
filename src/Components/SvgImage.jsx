const SvgImage = ({ data, customClass }) => {
  return (
    <object data={data} type="image/svg+xml" className={customClass}></object>
  );
};

export default SvgImage;
