import PropTypes from "prop-types";

export const Image = ({ url, alt, hoverUrl }) => {
  if (!hoverUrl)
    return <img loading="lazy" src={url} alt={alt} className="card-img" />;
  return (
    <div className="card-image">
      <img
        loading="lazy"
        src={url}
        alt={alt}
        className="card-img"
        width={100}
        height={100}
      />
      <img
        src={hoverUrl}
        alt={alt}
        className="card-img card-img-hover"
        width={100}
        height={100}
      />
    </div>
  );
};

Image.propTypes = {
  hoverUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
