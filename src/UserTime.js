//time should be an object with three props. sec, min, hrs.
//update the secs. When sec = 60, update the min. When min = 60, update the hr
function UserTime({ time }) {
  return (
    <span>{`${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
      time % 60
    ).padStart(2, "0")}`}</span>
  );
}

export default UserTime;
