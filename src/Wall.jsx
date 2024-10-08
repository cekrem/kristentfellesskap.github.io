import PropTypes from 'prop-types';
import './Wall.css';
import { useDatabase } from './firebase/useDatabase';

const Wall = ({ day }) => {
  const [, data] = useDatabase(day);

  const totalMinutes = Object.entries(data || {})
    .map(([, schedule]) => Number(schedule?.minutes) || 0)
    .reduce((acc, minutes) => acc + minutes, 0);

  const getProgress = (minutes) => {
    if (minutes === 0) return 0;
    if (minutes <= 15) return 1;
    if (minutes <= 30) return 2;
    if (minutes <= 45) return 3;
    if (minutes <= 60) return 4;
    if (minutes <= 90) return 5;
    if (minutes <= 120) return 6;
    if (minutes <= 150) return 7;
    if (minutes <= 180) return 8;
    if (minutes <= 360)
      return Math.min(Math.floor((minutes - 180) / 60) + 9, 12);
    return 12; // Max height at 6 hours
  };

  const getFortificationLevel = (minutes) => {
    if (minutes <= 360) return 0; // No fortification before 6 hours
    return Math.min(Math.floor((minutes - 360) / 60), 6); // Max 6 levels of fortification
  };

  const progress = getProgress(totalMinutes);
  const fortificationLevel = getFortificationLevel(totalMinutes);

  const solidityClass = `solidity-${progress}`;
  const fortificationClass = `fortification-${fortificationLevel}`;

  return (
    <div className={`wall ${solidityClass} ${fortificationClass}`}>
      <div className="wall-content">
        <div className="wall-body">
          <div className="crenellation"></div>
          <div className="crenellation"></div>
          <div className="crenellation"></div>
          <div className="crenellation"></div>
          {[...Array(fortificationLevel)].map((_, index) => (
            <div
              key={index}
              className={`fortification level-${index + 1}`}
            ></div>
          ))}
        </div>
        {progress === 0 && <div className="red-x">X</div>}
      </div>
      <div className="day-label">{day}</div>
    </div>
  );
};

Wall.propTypes = {
  day: PropTypes.string.isRequired,
};

export default Wall;
