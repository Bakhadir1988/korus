import React, { useState, useEffect } from 'react'

export const Item = ({ data, topLineClass }) => {
  const [isComleted, setIsComleted] = useState(false);
  const [isOpen, setIsOpen] = useState(data.isOpen);
  const [status, setStatus] = useState("Не заполнено");
  const { index, title, isBlocked, error } = data;

  function getStatus() {
    if (error) {
      return "Ошибка";
    } else if (isComleted) {
      return "Заполнено";
    } else {
      return "Не заполнено";
    }
  }

  useEffect(() => {
    setStatus(getStatus());
  }, [isComleted]);

  function changeInputHandler(e) {
    const text = e.target.value.trim();
    if (text && !error) {
      setIsComleted(true);
    } else {
      setIsComleted(false);
    }
  }

  function clickItemHandler(e) {
    if (!isBlocked) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div
      className=
      {`accordion-item ${isOpen ? "open" : ""} ${topLineClass} ${error} ${isBlocked ? "not-active" : ""} ${isComleted ? "complete" : ""}`}
    >
      <div className="accordion-header">
        <div className="accordion-number">{index}</div>
        <div className="accordion-title">{title}</div>
        {error ? (
          <div className="accordion-step">Ошибка</div>
        ) : (
          <div className="accordion-step">{status}</div>
        )}
        <div className="accordion-icon" onClick={clickItemHandler}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="accordion-info">
        <input
          type="text"
          placeholder="Заполните поля"
          onChange={changeInputHandler}
        />
      </div>
    </div>
  );
};
