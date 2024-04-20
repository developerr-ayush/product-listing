import PropTypes from "prop-types";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { Image } from "./Image";
import { CardData } from "./CardData";
import { CardFooter } from "./CardFooter";

export const Card = ({ carddata }) => {
  return (
    <div className="card">
      <CardHeader badgelist={carddata.badge} label="Pre-Owned" />
      <CardBody>
        {carddata.images.length > 1 ? (
          <Image
            url={carddata.images[0]}
            alt={carddata.name}
            hoverUrl={carddata.images[1]}
          />
        ) : (
          <Image url={carddata.images[0]} alt={carddata.name} />
        )}
        <CardData
          brand={carddata.brand}
          title={carddata.name}
          price={carddata.price}
          discountPercent={carddata.discountPercent}
          discountedPrice={carddata.discountedPrice}
          size={carddata.size}
        />
      </CardBody>
      <CardFooter emi={carddata.emi} likes={carddata.likes} />
    </div>
  );
};

Card.propTypes = {
  carddata: PropTypes.object.isRequired,
};
