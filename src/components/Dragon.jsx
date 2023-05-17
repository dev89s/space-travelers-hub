import PropTypes from 'prop-types';
import style from '../style/Dragon.module.css';

const Dragon = ({ imgURL, name, description }) => (
  <div className={style['list-item']}>
    <div className={style['img-container']}>
      <img className={style['dragon-img']} src={imgURL} alt={name} />
    </div>
    <div className={style['item-info']}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

Dragon.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Dragon;
