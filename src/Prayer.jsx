import Weekday from './Weekday.jsx';
import Wall from './Wall.jsx';

const week = [
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
  'Søndag',
];

const Prayer = () => (
  <>
    <div className="walls">
      {week.map((day) => (
        <Wall key={day} day={day} />
      ))}
    </div>

    <div className="weekdays">
      {week.map((day) => (
        <Weekday key={day} day={day} />
      ))}
    </div>
  </>
);

export default Prayer;
