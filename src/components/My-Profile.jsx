import '../style/Profile.css';
import '../style/Rockets.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
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
              {rockets.filter((rocket) => rocket.reserved).map((rocket) => {
                if (rocket.reserved) {
                  return (
                    <li key={rocket.id} className="profile-rocket-item">
                      {rocket.name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          )}
      </section>
    </div>
  );
}

export default MyProfile;
