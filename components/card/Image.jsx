import PropTypes from "prop-types";

export const Image = ({ url, alt, hoverUrl }) => {
  if (!hoverUrl)
    return (
      <img
        loading="lazy"
        src={url}
        alt={alt}
        className="card-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/img/default-watch.png";
        }}
      />
    );
  return (
    <div className="card-image">
      <img
        loading="lazy"
        src={url}
        alt={alt}
        className="card-img"
        width={100}
        height={100}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/img/default-watch.png";
        }}
      />
      <img
        src={hoverUrl}
        alt={alt}
        className="card-img card-img-hover"
        width={100}
        height={100}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/img/default-watch.png";
        }}
      />
    </div>
  );
};

Image.propTypes = {
  hoverUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
