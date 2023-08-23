import { data } from "../data.js";

function Summary() {
  return (
    <main>
      <h4>summary</h4>
      <ul className="list">
        {data.map((el, i) => (
          <li key={i}>
            <div className="first-box">
              <img src={el.icon} alt={el.category} className="icon" />
              <p>{el.category}</p>
            </div>
            <p className="score">
              {el.score} / <span className="percent">100</span>
            </p>
          </li>
        ))}
      </ul>
      <button className="btn">continue</button>
    </main>
  );
}
export default Summary;
