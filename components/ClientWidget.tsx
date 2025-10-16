"use client";
import { useState } from "react";

export default function ClientWidget() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>Client Component Counter</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Click Me
      </button>
    </div>
  );
}
