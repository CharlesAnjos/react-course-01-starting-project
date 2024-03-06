import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx";

function CodeExamples() {
  const exampleTabs = ['components', 'jsx', 'props', 'state']
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
    <Section id="examples" title="Examples!">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            {exampleTabs.map((exampleTabItem) =>
              <TabButton
                key={exampleTabItem}
                isSelected={selectedTopic === exampleTabItem}
                onSelect={() => handleSelect(exampleTabItem)}>{EXAMPLES[exampleTabItem].title}</TabButton>
            )}
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default CodeExamples;