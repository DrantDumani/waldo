import { useEffect, useState } from "react";

const strArr = ["L", "o", "a", "d", "i", "n", "g", ".", ".", "."];

function LoadingScreen() {
  const [animateIndex, setAnimateIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setAnimateIndex((ind) => (ind + 1) % strArr.length);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="loading-container">
      {strArr.map((c, ind) => (
        <span className={animateIndex === ind && "animate-load"}>{c}</span>
      ))}
    </div>
  );
}

export default LoadingScreen;
