import logo from "./assets/logo.png";
import "./App.css";
import UserInputForm from "./components/UserInputForm";
import BackgroundTransition from "./components/BackgroundTransition";
import { ReactComponent as ContinentsShape } from "./Continents.svg";
import { ReactComponent as AfricaShape } from "./assets/africa.svg";
import { ReactComponent as AsiaShape } from "./assets/asia.svg";
import { ReactComponent as NAmericaShape } from "./assets/north-america.svg";
import { ReactComponent as SAmericaShape } from "./assets/south-america.svg";
import { ReactComponent as AustraliaShape } from "./assets/australia.svg";


function App() {

  return (
    <div className="App">
      {/* The Header with navigation */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#problem">Our Problem</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App-body">
        <h1 className="App-title">Should you build solar panels on your house?</h1>
      </div>
      <div className="App-background">
        <AsiaShape className="asia-shape" />
        <AfricaShape className="africa-shape" />
        <NAmericaShape className="north-america-shape" />
        <SAmericaShape className="south-america-shape" />
        <AustraliaShape className="australia-shape" />
      </div>
    </div>
  );
}

export default App;
