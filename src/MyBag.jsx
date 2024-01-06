import LoadSide from "./components/LoadSide";
import Loadbag from "./components/LoadBag";
const MyBag = () => {
  return (
    <>
      <main>
        <div className="bag-page bagCls">
          <Loadbag></Loadbag>
          <LoadSide></LoadSide>
        </div>
      </main>
    </>
  );
};
export default MyBag;
