import { useEffect } from "react";
import { fetchDragons } from "../redux/dragons/dragonsSlice";
import { useDispatch, useSelector } from "react-redux";
import { dragonSelector } from "../redux/dragons/dragonsSlice";
import style from "../style/DragonList.module.css";
import Dragon from "./Dragon";

function DragonsList() {
  const dispatch = useDispatch();
  const { dragons, error } = useSelector(dragonSelector);

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);

  return (
    <div className={style["list-container"]}>
      {dragons.map(({ id, flickr_images, name, description }) => (
        <Dragon
          key={id}
          imgURL={flickr_images[1]}
          name={name}
          description={description}
        />
      ))}
    </div>
  );
}

export default DragonsList;
