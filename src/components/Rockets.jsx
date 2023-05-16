import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const { isLoading } = useSelector((state) => state.rockets);
  const { error } = useSelector((state) => state.rockets);
  const { listState } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (listState !== 'loaded') {
      dispatch(fetchRockets());
    }
  }, [dispatch, listState]);

  if (error) {
    return (
      <h2>
        There was an error loading the page.
        <br />
        {error}
      </h2>
    );
  }

  if (isLoading) {
    return (<h2>Page is loading</h2>);
  }
  return (
    <ul>
      {rockets.map((rocket) => (<li key={rocket.id}>{rocket.name}</li>))}
    </ul>
  );
}

export default Rockets;
