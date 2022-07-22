import logo from './logo.svg';
import './App.css';
// // import Navbar from './Navbar';
// import RealNavBar from './RealNavBar';
// import './RealNavBar'
// import Clickevent from './Clickevent';
// import Dynamic from './Dynamic';
// import Home from './Home';
// import List from './List';
import Counter from './Counter';
import Conditional from './Conditional';
import Effect from './Effect';

function App() {
  return (
    <div className="App">
      {/* <RealNavBar />
      <Clickevent />
      <Dynamic />
      <Home /> */}
      {/* <List /> */}
      <Counter />
      <Conditional />
      <Effect/>

    {/* //   <Navbar /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
