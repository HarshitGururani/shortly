/* eslint-disable react/prop-types */
const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full md:max-w-[1100px] my-0 mx-auto  ${className || ''}`}
    >
      {children}
    </div>
  );
};
export default ContentWrapper;
