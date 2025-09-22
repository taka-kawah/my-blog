import { useState } from "react";

export const TestButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <strong>{count}</strong>
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>
        おせおせおせおせ
      </button>
    </div>
  );
};
