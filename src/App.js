import './App.css';

function App() {

  function handleClick() {
    const url = 'http://localhost:3000/';
    const data = { fruit: "Apple" };
    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, config)
      .then(response => response.text())
      .then(result => console.log(result));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          Make a request!
        </button>
      </header>
    </div>
  );
}

export default App;
