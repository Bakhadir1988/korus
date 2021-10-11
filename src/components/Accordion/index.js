import React, { useState } from "react";
import { Item } from "./Item";

export const Accordion = () => {
  const [data, setData] = useState([
    {
      index: 1,
      title: "Заголовок аккордеона",
      isOpen: true,
      isBlocked: false,
      error: "",
    },
    {
      index: 2,
      title: "Заголовок аккордеона",
      isOpen: false,
      isBlocked: false,
      error: "",
    },
    {
      index: 3,
      title: "Заголовок аккордеона",
      isOpen: false,
      isBlocked: false,
      error: "",
    },
    {
      index: 4,
      title: "Заголовок аккордеона",
      isOpen: false,
      isBlocked: false,
      error: "",
    },
    {
      index: 5,
      title: "Заголовок аккордеона",
      isOpen: false,
      isBlocked: true,
      error: "",
    },
  ]);

  function checkError() {
    setData([
      {
        index: 1,
        title: "Заголовок аккордеона",
        isOpen: true,
        isBlocked: false,
        error: "",
      },
      {
        index: 2,
        title: "Заголовок аккордеона",
        isOpen: false,
        isBlocked: false,
        error: "",
      },
      {
        index: 3,
        title: "Заголовок аккордеона",
        isOpen: false,
        isBlocked: false,
        error: "uncritical-error",
      },
      {
        index: 4,
        title: "Заголовок аккордеона",
        isOpen: false,
        isBlocked: false,
        error: "error",
      },
      {
        index: 5,
        title: "Заголовок аккордеона",
        isOpen: false,
        isBlocked: true,
      },
    ]);
  }

  return (
    <div className="accordion-block">
      <div className="accordion">
        {data.map((item) => {
          let topLineClass = '';

          if (data.length > item.index) {
            if (data[item.index].error === "error") {
              topLineClass = "error-line";
            } else if (data[item.index].error === "uncritical-error") {
              topLineClass = "uncritical-error-line";
            }
          }
          return <Item key={item.index} data={item} topLineClass={topLineClass} />;
        })}
      </div>

      <button onClick={checkError}>Проверить на ошибки</button>
    </div>
  );
};
