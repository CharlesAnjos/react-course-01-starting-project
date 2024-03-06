import { CORE_CONCEPTS } from "../data.js";

function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => 
        <li>
          <img src={conceptItem.image} alt={conceptItem.title} />
          <h3>{conceptItem.title}</h3>
          <p>{conceptItem.description}</p>
        </li>
        )}
      </ul>
    </section>
  );
}

export default CoreConcept;