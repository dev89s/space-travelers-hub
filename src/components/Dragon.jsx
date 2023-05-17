import style from "../style/Dragon.module.css";

const Dragon = ({ id, imgURL, name, description }) => {
  return (
    <div className={style["list-item"]}>
      <div className={style["img-container"]}>
        <img
          className={style["dragon-img"]}
          src={imgURL}
          alt={`${name} image`}
        />
      </div>
      <div className={style["item-info"]}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Dragon;
