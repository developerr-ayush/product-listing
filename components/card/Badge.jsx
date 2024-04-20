import PropTypes from "prop-types";

export const Badge = ({ url, text }) => {
  return (
    <div className="badge">
      <img loading="lazy" src={url} alt={text} width={50} height={50} />
      <span>{text}</span>
    </div>
  );
};

Badge.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
