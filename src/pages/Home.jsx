import { Categories, PizzaBlock, SortPopup } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/reducers/actions/filters";
import { useCallback } from "react";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onItemClick={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items?.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
