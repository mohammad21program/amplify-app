import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from v2</h1>
        <h3>Amplify Deployed on AWS</h3>
        <a href='https://aws.amazon.com/'>Connect to AWS</a>
      </header>
    </div>
  );
}

export default App;
