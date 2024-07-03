import logo from './logo.svg';
import './App.css';
function Header(){
  return <h2>Hello</h2>
}
function Logo(props){
 const userPc=< img src={logo} />;
 return userPc;
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <h1>He<Header/></h1>
      <Logo/>
    </div>
    );
    
    
    
  
}

export default App;
