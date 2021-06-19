
import './App.css';
import News from './News/News';
import PostFrom from './News/PostForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Bienvenido a TA 2 - Concurrente</h1>
        <h2>Zandor Sánchez</h2>
      </header>
      <News />
      <PostFrom />
    </div>
  );
}

export default App;
