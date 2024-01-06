import { useSelector } from "react-redux";
import HomeItem from "./components/HomeItem";
import { INITIAL_ITEMS } from "../store/items";
const Home = () => {
  // const items = useSelector((store) => store.myntraItems);
  const items = INITIAL_ITEMS;
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem item={item} key={item.id}></HomeItem>
        ))}
      </div>
    </main>
  );
};

export default Home;
