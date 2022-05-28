import "./public/styles/styles.css";
import { routes } from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((routeObj) => (
          <Route key={routeObj.path} path={routeObj.path} element={routeObj.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
