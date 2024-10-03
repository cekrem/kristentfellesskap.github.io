import { LoginButton, LogoutButton } from './firebase/authStateComponents.jsx';
import Weekday from './Weekday.jsx';

const Prayer = () => (
  <>
    <div className="weekdays">
      {week.map((day) => (
        <Weekday key={day} day={day} />
      ))}
    </div>
    <LoginButton />
    <LogoutButton />
  </>
);

const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default Prayer;
