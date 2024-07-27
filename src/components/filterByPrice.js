import { useSelector, useDispatch } from "react-redux";
import { getMinValue } from "../redux/action";
import { getMaxValue } from "../redux/action";

export function FilterByPrice() {
  const minPrice = useSelector((state) => {
    return state.filters.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.filters.maxPrice;
  });

  const dispatch = useDispatch();

  const getPakageMinValue = (e) => dispatch(getMinValue(e));
  const getPakageMaxValue = (e) => dispatch(getMaxValue(e));

  function pakageMinValue(e) {
    getPakageMinValue(e.target.value);
  }
  function pakageMaxValue(e) {
    getPakageMaxValue(e.target.value);
  }

  return (
    <div>
      <input value={minPrice} onInput={(e) => pakageMinValue(e)}></input>
      <input value={maxPrice} onInput={(e) => pakageMaxValue(e)}></input>
    </div>
  );
}
