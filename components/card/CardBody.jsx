import PropTypes from "prop-types";

export const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
