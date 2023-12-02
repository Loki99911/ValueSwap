import "./App.css";
import { MainComp } from "./components/MainComp/MainComp";
import TransferForm from "./components/TransferForm/TransferForm";
import logo from "./assets/Frame.svg";
import { MainVideo } from "./components/MainComp/MainComp.styled";
import { useEffect, useState } from "react";
import { getBaseList, getCoinsInfo } from "./helpers/api/getBaseList";
import video from "../public/video.mp4";

function App() {
  const [baseCoinList, setBaseCoinList] = useState([]);
  useEffect(() => {
    console.log("Effect");
    getBaseList().then((response) => {
      const IDsArr = response.slice(0, 9).map((el) => el.id);
      console.log(IDsArr);
      getCoinsInfo(IDsArr).then((results) => {
        console.log(results);
        setBaseCoinList(response);
      });
    });
  }, []);

  return (
    <MainComp>
      <img src={logo} alt="logo" style={{ marginBottom: "69px" }} />
      <TransferForm baseCoinList={baseCoinList} />
      <MainVideo autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </MainVideo>
    </MainComp>
  );
}

export default App;
