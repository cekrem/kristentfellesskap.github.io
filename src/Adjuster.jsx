import PropTypes from 'prop-types';

const Adjuster = ({ schedule, updateSchedule, className, style }) => (
  <div className={className} style={style}>
    <button
      type="button"
      onClick={() =>
        updateSchedule({
          minutes: Math.max((Number(schedule?.minutes) || 0) - 15, 0),
        })
      }
    >
      -
    </button>
    <button
      type="button"
      onClick={() =>
        updateSchedule({
          minutes: Math.min((Number(schedule?.minutes) || 0) + 15, 1440),
        })
      }
    >
      +
    </button>
    <button type="button" onClick={() => updateSchedule({ minutes: 0 })}>
      x
    </button>
  </div>
);

Adjuster.propTypes = {
  schedule: PropTypes.shape({
    minutes: PropTypes.number,
  }),
  updateSchedule: PropTypes.func.isRequired,
  className: PropTypes.string, // Added className prop type
  style: PropTypes.object, // Added style prop type
};

export default Adjuster;
