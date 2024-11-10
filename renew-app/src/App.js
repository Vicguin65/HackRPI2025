import logo from './logo.png';
import './App.css';
import UserInputForm from './components/UserInputForm';
import BackgroundTransition from './components/BackgroundTransition';
import { ReactComponent as ContinentsShape } from './Continents.svg'; 
import { ReactComponent as AfricaShape} from './africa.svg'; 
import { ReactComponent as AsiaShape} from './asia.svg'; 
import { ReactComponent as NAmericaShape} from './north-america.svg';
import { ReactComponent as SAmericaShape} from './south-america.svg';
import { ReactComponent as AustraliaShape} from './australia.svg';

function App() {
  return (
    <div className="App">
      {/* The Header with navigation */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#problem">Our Problem</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="App-body">
        <h1 className="App-title">Where do you want to build solar panels?</h1>
        
      </div>
      <UserInputForm />
      <div className="App-background">
        {/* <h1 className="App-title">Where do you want to build solar panels?</h1> */}
        {/* <svg className="background-shape" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="rgb(16, 146, 207)" />
        </svg>
        <svg className="background-shape" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="rgb(4, 80, 151)" />
        </svg>
        <svg className="background-shape" viewBox="0 0 100 100">
          <path
            fill="rgb(4, 80, 151)"></path>
        </svg> */}
      {/* <NorthAmericaShape className="background-shape"/> */}
      <AsiaShape className="asia-shape"/>
      <AfricaShape className="africa-shape"/>
      <NAmericaShape className="north-america-shape"/>
      <SAmericaShape className="south-america-shape"/>
      <AustraliaShape className="australia-shape"/>
      </div>
    </div>
  );
}

export default App;
