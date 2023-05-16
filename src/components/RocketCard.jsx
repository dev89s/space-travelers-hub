import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const cancel = () => {
    dispatch(cancelRocket(rocket.id));
  };
  return (
    <li className="rocket-card">
      <img src={rocket.flickr_images[0]} alt="Rocket" />
      <div className="rocket-card-details">
        <h2 className="rocket-card-title">{rocket.name}</h2>
        <p className="rocket-card-description">{rocket.description}</p>
        {!rocket.reserved
          && (
            <button
              type="button"
              className="reserve-btn"
              onClick={reserve}
            >
              Reserve Rocket
            </button>
          )}
        {rocket.reserved
          && (
            <button
              type="button"
              className="cancel-btn"
              onClick={cancel}
            >
              Cancel Rocket
            </button>
          )}
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
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
