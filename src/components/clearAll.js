import { useDispatch } from "react-redux";
import { clearFilter } from "../redux/action";

export function ClearAll() {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearFilter());
  };

  return (
    <button type="button" onClick={clear}>
      clearAll
    </button>
  );
}
