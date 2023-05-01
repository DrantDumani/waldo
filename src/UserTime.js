function UserTime({ time }) {
  return (
    <span>{`${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
      time % 60
    ).padStart(2, "0")}`}</span>
  );
}

export default UserTime;
