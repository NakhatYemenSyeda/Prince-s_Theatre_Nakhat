import "./App.css";
import Header from "./Components/Header";
import ContentSection from "./Components/ContentSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <div>
      <ContentSection />
      </div>
    </div>
  );
}

export default App;
