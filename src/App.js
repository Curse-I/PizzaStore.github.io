import { Header } from "./components/";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact={true} path={"/"} component={Home} />
        <Route exact={true} path={"/Cart"} component={Cart} />
      </div>
    </div>
  );
}

export default App;
