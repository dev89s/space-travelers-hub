import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDragons, dragonSelector } from "../redux/dragons/dragonsSlice";

import style from "../style/DragonList.module.css";
import Dragon from "./Dragon";

function DragonsList() {
  const dispatch = useDispatch();
  const { dragons, listState } = useSelector(dragonSelector);
  useEffect(() => {
    listState === "idle" && dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div className={style["list-container"]}>
      {dragons.map((dragon) => (
        <Dragon
          key={dragon.id}
          id={dragon.id}
          reserved={dragon.reserved}
          imgURL={dragon.flickr_images[1]}
          name={dragon.name}
          description={dragon.description}
        />
      ))}
    </div>
  );
}

export default DragonsList;
