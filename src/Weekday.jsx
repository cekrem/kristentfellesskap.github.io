import PropTypes from 'prop-types';
import { useAuth } from './firebase/useAuth';
import { useDatabase } from './firebase/useDatabase';
import { IfLoggedIn } from './firebase/authStateComponents';
import Adjuster from './Adjuster';

const Weekday = ({ day }) => {
  const [, user] = useAuth();
  const name = user?.displayName;
  const [loading, data] = useDatabase(day);
  const [, schedule, updateSchedule] = useDatabase(
    !name ? null : `${day}/${name}`,
  );

  const entries = Object.entries(data || {})
    .map(([person, schedule]) => ({
      person,
      minutes: Number(schedule?.minutes) || 0,
    }))
    .filter(({ minutes }) => minutes > 0);

  return (
    <div className="weekday">
      <div>
        <b>{day}</b>
        <IfLoggedIn>
          <Adjuster
            style={{ float: 'right' }}
            schedule={schedule}
            updateSchedule={updateSchedule}
          />
        </IfLoggedIn>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        entries.map(({ person, minutes }) => (
          <div key={person}>
            {person}: {minutes} min
          </div>
        ))
      )}
    </div>
  );
};

Weekday.propTypes = {
  day: PropTypes.string.isRequired,
};

export default Weekday;
