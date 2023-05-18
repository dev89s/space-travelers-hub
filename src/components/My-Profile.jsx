import '../style/Profile.css';
import '../style/Rockets.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((item) => item.reserved === true);

  return (
    <div className="profile-page">
      <section className="profile-rocket-section">
        <h2 className="profile-rocket-header">My Rockets</h2>
        {(rockets.filter((rocket) => rocket.reserved).length === 0)
          && (
            <h2 className="no-reserved-rockets">
              You have no reserved rockets!
            </h2>
          )}
        {(rockets.filter((rocket) => rocket.reserved).length > 0)
          && (
            <ul className="reserved-rocket-list">
              {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
                <li key={rocket.id} className="profile-rocket-item">
                  {rocket.name}
                </li>
              ))}
            </ul>
          )}
      </section>

      <section className="profile-mission-section">
        <h2 className="profile-mission-header">My Mission</h2>
        {(reservedMissions.length === 0)
          && (
            <h2 className="no-reserved-mission">
              You have no reserved mission!
            </h2>
          )}
        {(reservedMissions.length > 0)
          && (
            <ul className="reserved-mission-list">
              {reservedMissions.map((item) => (
                <li key={item.id} className="profile-mission-item">
                  {item.name}
                </li>
              ))}
            </ul>
          )}
      </section>
    </div>
  );
}

export default MyProfile;
