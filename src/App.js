import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
