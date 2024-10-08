import PropTypes from 'prop-types';
import Adjuster from './Adjuster';
import { IfLoggedIn } from './firebase/authStateComponents';
import { useAuth } from './firebase/useAuth';
import { useDatabase } from './firebase/useDatabase';
import './Weekday.css';

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

  const totalMinutes = entries.reduce((acc, { minutes }) => acc + minutes, 0);

  return (
    <div
      className="weekday"
      style={{
        backgroundColor: `rgba(57, 255, 20, ${totalMinutes / 1440})`,
      }}
    >
      <div>
        <b>
          {day}{' '}
          {!loading && (
            <span
              style={{
                color: totalMinutes === 0 ? 'red' : 'inherit',
              }}
            >
              ({totalMinutes} min)
            </span>
          )}
        </b>
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
