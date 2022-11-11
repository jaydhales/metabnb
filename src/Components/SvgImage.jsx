const SvgImage = ({ data, customClass }) => {
  return (
    <div className={customClass}>
      <object data={data} type="image/svg+xml" className="w-full" />
    </div>
  );
};

export default SvgImage;
