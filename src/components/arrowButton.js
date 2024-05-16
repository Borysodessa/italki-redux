import arrow from "./images/arrow.svg";

export function ArrowButton({ onClick, isRotated }) {
  return (
    <button className="angle-down" onClick={onClick}>
      <img
        style={{
          transform: isRotated && "rotate(180deg)",
        }}
        src={arrow}
        alt=""
      ></img>
    </button>
  );
}
