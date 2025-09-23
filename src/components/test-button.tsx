import { useState } from "react";
import "../styles/global.css";

export const TestButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="grid place-content-center">
      <p className="font-hachi-maru-pop">
        <strong>{count}</strong>回♡
      </p>
      <button
        className="font-bold font-hachi-maru-pop bg-pink-400 text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        おせ♡おせ♡おせ♡おせ♡
      </button>
      <p className={count > 0 ? "font-hachi-maru-pop" : "font-reggae-one"}>
        {count > 0 ? "意味ないよ～笑" : "押せ！"}
      </p>
    </div>
  );
};
