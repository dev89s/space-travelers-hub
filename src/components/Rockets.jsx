import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import '../style/Rockets.css';
import RocketCard from './RocketCard';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const { isLoading } = useSelector((state) => state.rockets);
  const { error } = useSelector((state) => state.rockets);
  const { listState } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (listState === 'empty') {
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
    <ul className="rocket-list">
      {rockets.map((rocket) => (
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
}

export default Rockets;
