function AppTime() {
  let time = new Date();
  return (
    <div className="AppTime_container">
      <p>
        This is the Current date and Time: {time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default AppTime;
