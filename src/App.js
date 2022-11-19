import "./App.css";
import { HashRouter } from "react-router-dom";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routers />
      </HashRouter>
    </div>
  );
}

export default App;
