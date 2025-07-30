import './App.css';
import { useTheme } from './context/ThemeProvider'

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
    </div>
  );
}

export default App;
