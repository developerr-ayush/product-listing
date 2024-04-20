import { BadgeList } from "./BadgeList";
import PropTypes from "prop-types";

export const CardHeader = ({ badgelist, label }) => {
  return (
    <div className="card-header">
      <p className="label">{label}</p>
      <BadgeList badgelist={badgelist} />
    </div>
  );
};

CardHeader.propTypes = {
    badgelist: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
};
