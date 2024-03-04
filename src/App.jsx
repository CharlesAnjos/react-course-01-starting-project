import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const exampleTabs = ['components','jsx','props','state']
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>
  if (selectedTopic) {
    tabContent = 
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples!</h2>
          <menu>
            {exampleTabs.map((exampleTabItem) => 
            <TabButton
              key={exampleTabItem}
              isSelected={selectedTopic === exampleTabItem} 
              onSelect={() => handleSelect(exampleTabItem)}>{EXAMPLES[exampleTabItem].title}</TabButton>
            )}
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
