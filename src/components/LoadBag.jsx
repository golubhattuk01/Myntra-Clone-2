import { useSelector } from "react-redux";
import BagItem from "./BagItem";
const Loadbag = () => {
  const bagList = useSelector((store) => store.bagitem);
  return bagList.map((item) => <BagItem item={item} key={item.id} />);
};
export default Loadbag;
