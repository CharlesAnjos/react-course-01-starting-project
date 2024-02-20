function Card(props) {
  return (
    <div class="card">
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
}

export default Card;