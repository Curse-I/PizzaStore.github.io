import { Header } from "./components/";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { setPizzas } from "./redux/reducers/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);
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
