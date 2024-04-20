import { Like } from "./Like";

import PropTypes from "prop-types";

export const CardFooter = ({ emi, likes }) => {
  return (
    <div className="card-footer">
      {emi && (
        <div className="card-footer-top">
          <p>EMI Available</p>
        </div>
      )}
      <div className="card-footer-bottom">
        <img src="/icons/rocket.png" alt="rocket" />
        <Like likes={likes} />
      </div>
    </div>
  );
};

CardFooter.propTypes = {
  emi: PropTypes.bool,
  likes: PropTypes.number.isRequired,
};
