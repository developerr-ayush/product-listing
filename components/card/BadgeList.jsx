import PropTypes from 'prop-types';
import { Badge } from './Badge';

export const BadgeList = ({ badgelist }) => {
    return (
        <div className="badge-list">
            {badgelist.map((badge, index) => (
                <Badge key={index} url={badge.url} text={badge.text} />
            ))}
        </div>
    );
};

BadgeList.propTypes = {
    badgelist: PropTypes.array.isRequired,
};
