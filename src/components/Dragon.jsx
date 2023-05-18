import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from '../style/Dragon.module.css';
import {
  reserverDragon,
  cancelReservation,
} from '../redux/dragons/dragonsSlice';

const Dragon = ({
  id, imgURL, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={style['list-item']}>
      <div className={style['img-container']}>
        <img className={style['dragon-img']} src={imgURL} alt={name} />
      </div>
      <div className={style['item-info']}>
        <h3>{name}</h3>

        <p>
          {reserved && <span className={style['reserve-badge']}>Reserved</span>}
          {description}
        </p>
        {!reserved ? (
          <button
            type="button"
            className={style['reserve-btn']}
            onClick={() => dispatch(reserverDragon(id))}
          >
            Reserve Dragon
          </button>
        ) : (
          <button
            type="button"
            className={style['cancel-reseve']}
            onClick={() => dispatch(cancelReservation(id))}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  imgURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Dragon;
