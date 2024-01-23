import { sharedVariable } from '@siren-sdk/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{sharedVariable}</div>
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
      </header>
    </div>
  );
}

export default App;
