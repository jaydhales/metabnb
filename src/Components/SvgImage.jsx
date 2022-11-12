const SvgImage = ({ data, customClass }) => {
  return (
    <div className={customClass}>
      <object data={data} type="image/svg+xml" className="min-w-0 w-full" />
    </div>
  );
};

export default SvgImage;
