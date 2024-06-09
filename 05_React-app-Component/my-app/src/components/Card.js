const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const todayDate = `${dateName} / ${monthName + 1} / ${yearName}`;
const authorName = "Supriyo Das";

const Card = (props) => {
  const { cardTitle, cardBody } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{cardTitle}</h3>
      <p className="cardBody">{cardBody}</p>
      <p className="footer">
        <span>{authorName} </span>
        <span>({todayDate})</span>
      </p>
    </div>
  );
};

export default Card;
