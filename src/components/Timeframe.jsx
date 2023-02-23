export default function Timeframe({ timeframe, active, onActivateTimeFrame }) {
  return (
    <li
      onClick={onActivateTimeFrame}
      className={`${
        active && "text-white"
      } cursor-pointer duration-200 ease-in-out hover:text-white`}
    >
      {timeframe[0].toUpperCase() + timeframe.slice(1)}
    </li>
  );
}
