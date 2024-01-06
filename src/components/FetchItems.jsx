import { useDispatch, useSelector } from "react-redux";
import { itemSliceActions } from "../../store/ItemSlice";
import { FetchingSliceActions } from "../../store/FetchingSlice";
import { useEffect } from "react";
const FetchItems = () => {
  const dispatch = useDispatch();
  const serverFetch = useSelector((store) => store.fetching);

  useEffect(() => {
    // if (serverFetch) return;
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("start");
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemSliceActions.setItem(items));
        dispatch(FetchingSliceActions.serverFetchToggle("DONE"));
      });
    console.log("end");
    return () => {
      controller.abort();
    };
  }, []);

  return <div>FETCH : {serverFetch}</div>;
};
export default FetchItems;
