import { useState } from "react";
import "./CodeExamples.css"
import { EXAMPLES } from "../../data.js";
import TabButton from "../../components/TabButton/TabButton.jsx";

function CodeExamples() {
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
  );
}

export default CodeExamples;