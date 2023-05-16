import { PropTypes } from 'prop-types';

function RocketCard({ rocket }) {
  return (
    <li className="rocket-card">
      <img src={rocket.flickr_images[0]} alt="Rocket" />
      <div className="rocket-card-details">
        <h2 className="rocket-card-title">{rocket.name}</h2>
        <p className="rocket-card-description">{rocket.description}</p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </li>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketCard;
