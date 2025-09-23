import { useState } from "react";
import "../styles/global.css";

export const TestButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <strong>{count}</strong>
      <br />
      <button
        className="font-bold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        おせおせおせおせ
      </button>
    </div>
  );
};
