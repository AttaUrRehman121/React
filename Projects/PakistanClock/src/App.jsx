import AppNameH from "./Components/AppNameH";
import AppDescription from "./Components/AppDescription";
import AppTime from "./Components/AppTime";

function App() {
  return (
    <center>
      <div className="content_Container">
        <AppNameH></AppNameH>

        <div className="description">
          <AppDescription></AppDescription>
        </div>

        <div className="AppTime_container">
          <AppTime></AppTime>
        </div>
      </div>
    </center>
  );
}

export default App;
