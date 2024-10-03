import Weekday from './Weekday.jsx';

const Prayer = () => (
  <div className="weekdays">
    {week.map((day) => (
      <Weekday key={day} day={day} />
    ))}
  </div>
);

const week = [
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
  'Søndag',
];

export default Prayer;
