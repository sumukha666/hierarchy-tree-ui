import "./public/styles/styles.css";
import { routes } from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">Hello world</div>
      <Routes>
        {routes.map((routeObj) => (
          <Route key={routeObj.path} path={routeObj.path} element={routeObj.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
