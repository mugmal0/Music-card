import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default Container;
