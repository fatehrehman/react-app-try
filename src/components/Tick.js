function Tick() {
  function showTime() {
    // Tick clock is not working because we have not used state property in component
    return <h1>Tick {new Date().toLocaleTimeString()}</h1>;
  }
  setInterval(showTime, 1000);
  return <div>{showTime()}</div>;
}
export default Tick;
