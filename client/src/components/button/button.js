import React from "react";
function Button({ id, title, active, setactive }) {
  return (
    <button
      type="button"
      className={
        "btn rounded-pill fw-light px-2 px-md-4 m-1 m-md-2 " +
        (active ? "btn-dark" : "btn-light")
      }
      key={id}
      onClick={() => setactive(id)}
    >
      <div className="font-bold">{title}</div>
    </button>
  );
}

export default Button;
