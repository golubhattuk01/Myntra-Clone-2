import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";
function App() {
  return (
    // <Provider store={MyStore}>
    <>
      <Header></Header>
      {/* <FetchItems></FetchItems> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
    // </Provider>
  );
}

export default App;
