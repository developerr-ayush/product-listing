import { useState } from "react";

import PropTypes from "prop-types";

export const Like = ({ likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className={"like-wrap" + (isLiked ? " liked" : "")}>
      <button
        className="like"
        title="like"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? (
          <img loading="lazy" src="/icons/heart.png" alt="like" />
        ) : (
          <div className="not-liked">
            <img loading="lazy" src="/icons/heart-outline.png" alt="heart" />
            <img loading="lazy" src="/icons/heart.png" alt="heart" />
          </div>
        )}
        <p> {likes + (isLiked ? 1 : 0)} Likes</p>
      </button>
    </div>
  );
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
};
