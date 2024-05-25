function Card(props) {
  const { title, desc } = props;
  return (
    <div className="cardDiv">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{desc}</p>
    </div>
  );
}

export default Card;
