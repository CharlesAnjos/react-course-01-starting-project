import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import CodeExamples from "./components/CodeExamples/CodeExamples.jsx"

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept/>
        <CodeExamples/>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
