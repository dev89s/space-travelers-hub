import '../style/Profile.css';
import { useSelector } from 'react-redux';
import { dragonSelector } from '../redux/dragons/dragonsSlice';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((item) => item.reserved === true);
  const { dragons } = useSelector(dragonSelector);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  return (
    <div className="profile-page">
      <section className="column">
        <h2 className="profile-header">My Rockets</h2>
        {rockets.filter((rocket) => rocket.reserved).length === 0 && (
          <h2 className="no-reserved">You have no reserved rockets!</h2>
        )}
        {rockets.filter((rocket) => rocket.reserved).length > 0 && (
          <ul className="reserved-list">
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li key={rocket.id} className="reserved-item">
                  {rocket.name}
                </li>
              ))}
          </ul>
        )}
      </section>

      <section className="column">
        <h2 className="profile-header">My Missions</h2>
        {reservedMissions.length === 0 && (
          <h2 className="no-reserved">You have no reserved mission!</h2>
        )}
        {reservedMissions.length > 0 && (
          <ul className="reserved-list">
            {reservedMissions.map((item) => (
              <li key={item.id} className="reserved-item">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="column">
        <h2 className="profile-header">My Dragons</h2>
        {!reservedDragons.length && (
          <h2 className="no-reserved">You have no reserved dragons!</h2>
        )}
        {!!reservedDragons.length && (
          <ul className="reserved-list">
            {reservedDragons.map((dragon) => (
              <li key={dragon.id} className="reserved-item">
                {dragon.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default MyProfile;
