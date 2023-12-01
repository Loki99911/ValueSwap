import "./App.css";
import { MainComp } from "./components/MainComp/MainComp";
import TransferForm from "./components/TransferForm/TransferForm";
import logo from "./assets/Frame.svg";
import { MainVideo } from "./components/MainComp/MainComp.styled";
function App() {
  return (
    <MainComp>
      <img src={logo} alt="logo" style={{ marginBottom: "69px" }} />
      <TransferForm />
      <MainVideo autoPlay muted loop playsInline>
        <source src="../../../public/video.mp4" type="video/mp4" />
      </MainVideo>
    </MainComp>
  );
}

export default App;
